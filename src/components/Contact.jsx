import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);

      // remove shake after animation completes
      setTimeout(() => setError(false), 500);
      return;
    }

    // ✅ handle real email sending here (EmailJS or backend)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-12 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 max-w-xl mx-auto ${error ? "shake" : ""}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
}
