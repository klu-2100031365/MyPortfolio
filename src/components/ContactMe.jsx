import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactMe = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fazpjem",     // Your EmailJS service ID
        "template_yf6v7ma",    // Your EmailJS template ID
        formRef.current,
        "VpPgJBAlLX6iL1GT4"    // Your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset(); // Clear the form
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 text-gray-800 dark:text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
      >
        Get in Touch
      </motion.h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 rounded-xl shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-white hover:bg-blue-700 text-black font-semibold px-6 py-2 rounded-md  cursor-pointer transition"
          >
            Send Message
          </motion.button>
        </motion.div>
      </form>
    </section>
  );
};

export default ContactMe;
