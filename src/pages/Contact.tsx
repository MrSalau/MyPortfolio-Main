import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// ✅ Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required").min(10),
});

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Submitted data:", data);
      toast.success("Message sent successfully! 🎉");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto mt-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-3xl font-bold mb-10 text-center">📬 Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-5 mx-auto max-w-3xl">
        {/* Left: Contact Info */}
        <div className="space-y-4 text-gray-700 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold flex justify-center md:justify-start items-center gap-2">
              <Mail size={20} /> Email
            </h3>
            <p className="md:ml-7">salauayoola123@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold flex justify-center md:justify-start items-center gap-2">
              <Phone size={20} /> Phone
            </h3>
            <p className="md:ml-7">+234 810 844 8540</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold flex justify-center md:justify-start items-center gap-2">
              🌐 Social Links
            </h3>
            <div className="flex justify-center md:justify-start gap-5 mt-2 md:ml-7 text-blue-600">
              <a
                href="https://github.com/MrSalau"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/ayoola-salau-38832a18a/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <Linkedin />
              </a>
              <a
                href="https://x.com/ayoola_sal56676"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter Profile"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border rounded-lg shadow p-6 space-y-5 w-full"
          noValidate
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-sm text-gray-800"
            >
              Your Name
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="James John"
              title="Please enter your full name"
              className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-sm text-gray-800"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              title="Please enter your email address"
              className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-sm text-gray-800"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              placeholder="Type your message here..."
              title="Please enter your message"
              className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
