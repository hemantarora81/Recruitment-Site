import React, { useState } from 'react'

const Footer = () => {
      const [formData, setFormData] = useState({ name: "", email: "", message: "" });
      const [loading, setLoading] = useState(false);
      const [response, setResponse] = useState("");
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const API_URL = "/api";
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");
    
        try {
          const response = await fetch(`${API_URL}/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setResponse(`✅ ${data.message}`);
            setFormData({ name: "", email: "", message: "" });
          } else {
            setResponse(`❌ Error: ${data.message || "Failed to send message"}`);
          }
        } catch (error) {
          setResponse("❌ Network error. Please try again.");
        } finally {
          setLoading(false);
        }
      };
  return (
    <div className=" text-center">
    <h2 className="text-lg font-semibold mb-3">Freelance Work Inquiry</h2>
    
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="block mx-auto w-4/5 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block mx-auto w-4/5 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="block mx-auto w-4/5 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md transition duration-300"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {response && <p className="text-sm mt-2">{response}</p>}
    </form>
  </div>
  )
}

export default Footer