import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  country: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  country: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key as keyof FormData] = "Please complete this required field.";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
      setFormData(initialFormData); // reset form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-black text-white "
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Sign Up For Game-Changing Social Marketing Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 text-sm">First name*</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
              errors.firstName ? "border-2 border-red-500" : "border"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm">Last name*</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
              errors.lastName ? "border-2 border-red-500" : "border"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm">Company*</label>
          <input
            type="text"
            name="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
              errors.company ? "border-2 border-red-500" : "border"
            }`}
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm">Job title*</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter your job title"
            value={formData.jobTitle}
            onChange={handleChange}
            className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
              errors.jobTitle ? "border-2 border-red-500" : "border"
            }`}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-1 text-sm">Email*</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
            errors.email ? "border-2 border-red-500" : "border"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mt-6">
        <label className="block mb-1 text-sm">Country*</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={`w-full p-3 rounded text-black outline-none focus:outline-2 focus:outline-beast-purple-light ${
            errors.country ? "border-2 border-red-500" : "border"
          }`}
        >
          <option value="">Please Select</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country}</p>
        )}
      </div>

      {/* Global Error Message */}
      {Object.keys(errors).length > 0 && (
        <p className="text-red-500 text-sm mt-6">
          Please complete all required fields.
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          className="px-6 py-2 border-2 border-beast-purple-light text-white hover:bg-beast-purple-light transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
