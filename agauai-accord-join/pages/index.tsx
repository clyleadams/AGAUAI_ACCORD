// AGAUAI – Join the Accord Page
// Pledge form with name, email, country, and opt-in for Golden Visa petition

import React, { useState } from "react";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    goldenVisa: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://script.google.com/macros/s/AKfycbwSEkG86051PK1GJjnVh-HdSasf7fsdPp5mIkf7Faw/exec";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Submitted:", formData);
        setSubmitted(true);
      } else {
        console.error("Failed to submit form.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Join the AGAUAI Accord</h1>
        <p className="text-lg mb-8">
          This is not a donation. It’s a declaration. Your name and your belief — that’s all we ask.
        </p>

        {submitted ? (
          <div className="text-green-600 font-semibold text-xl">
            ✅ Thank you. You are now part of the Accord.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-left font-medium">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="goldenVisa"
                name="goldenVisa"
                checked={formData.goldenVisa}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <label htmlFor="goldenVisa" className="text-left text-sm">
                I want my name included in the list submitted to the Ukrainian Parliament in support of a meaningful Golden Visa — one built on principle, not profit.
              </label>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded font-semibold"
            >
              Commit to the Accord
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
