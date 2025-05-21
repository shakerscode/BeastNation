import ContactSection from "@/components/contact/ContactSection";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We will get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white dark:bg-black mt-10">
      {/* Contact Form and Information */}

      <ContactSection />

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">
              Interactive map would be displayed here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
