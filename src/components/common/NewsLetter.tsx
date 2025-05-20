import { useModal } from "@/modal/useModal";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const NewsLetter = () => {
  const { isOpen, closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Global Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            inset: "unset",
            maxWidth: "700px",
            width: "100%",
            background: "#000",
            padding: "2rem",
            borderRadius: "0.5rem",
            overflow: "auto",
            maxHeight: "90vh",
          },
        }}
      >
        <motion.section
          className="flex items-center overflow-hidden z-50 justify-center px-4 py-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-full">
            <div className="text-center mb-6">
              <h1 className="text-beast-purple-light font-medium text-base">
                TrendyNation
              </h1>
              <h2 className="text-5xl text-beast-purple-light font-bold">
                The Newsletter
              </h2>
              <p className="mt-2">
                Subscribe for monthly insights and the latest news in
                social-first marketing.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    {...register("firstName")}
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black font-medium"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    {...register("lastName")}
                    type="text"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black font-medium"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your email"
                  className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 text-black font-medium ${
                    errors.email
                      ? "border-red-500 ring-red-400"
                      : "border-gray-300 focus:ring-black"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Footer Text */}
              <p className="text-xs ">
                We'll use the contact information you provide to send you our
                newsletter. You may unsubscribe from these communications at
                anytime. For more information on how to unsubscribe, as well as
                our privacy practices and commitment to protecting your privacy,
                check out our Privacy Policy.
              </p>

              {/* Submit */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-md bg-beast-purple text-white py-2 font-semibold hover:bg-beast-purple-dark transition disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </motion.section>
      </Modal>
    </>
  );
};

export default NewsLetter;
