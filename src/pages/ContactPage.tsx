import ContactSection from "@/components/contact/ContactSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

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
 
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-beast-600 hover:bg-beast-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-beast-100 dark:bg-beast-900/50 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-beast-700 dark:text-beast-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <address className="not-italic text-gray-600 dark:text-gray-400">
                      <p>123 Creator Avenue</p>
                      <p>Los Angeles, CA 90210</p>
                      <p>United States</p>
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-beast-100 dark:bg-beast-900/50 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-beast-700 dark:text-beast-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="mailto:info@trenynation.com"
                        className="hover:text-beast-700 dark:hover:text-beast-400"
                      >
                        info@trenynation.com
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="mailto:partnerships@trenynation.com"
                        className="hover:text-beast-700 dark:hover:text-beast-400"
                      >
                        partnerships@trenynation.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-beast-100 dark:bg-beast-900/50 p-3 rounded-full mr-4">
                    <FaPhone className="text-beast-700 dark:text-beast-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a
                        href="tel:+15551234567"
                        className="hover:text-beast-700 dark:hover:text-beast-400"
                      >
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-lg mb-3">Office Hours</h3>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                    <p>Monday - Friday:</p>
                    <p>9:00 AM - 6:00 PM (PST)</p>
                    <p>Saturday:</p>
                    <p>10:00 AM - 3:00 PM (PST)</p>
                    <p>Sunday:</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 

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
