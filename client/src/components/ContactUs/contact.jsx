import React, { useState } from "react";

const contactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Location:", location);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        >
          <h2 className="mb-8 text-4xl font-bold text-center">Contact Us</h2>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="mobile"
            >
              Mobile
            </label>
            <input
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none"
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="focus:outline-none focus:shadow-outline w-full px-3 py-2 mb-1 leading-tight text-gray-700 border rounded shadow appearance-none"
              id="location"
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="space-x-9 flex items-center justify-center">
            <button
              className="hover:bg-blue-700 focus:outline-none focus:shadow-outline px-4 py-2 font-bold text-white bg-blue-500 rounded"
              type="submit"
            >
              Submit
            </button>
            <a
              href="https://forms.gle/gC14oUFKpQCQS21T7"
              className="hover:bg-blue-700 focus:outline-none focus:shadow-outline px-4 py-2 font-bold text-white bg-blue-500 rounded"
              type="submit"
            >
              Submit GForm
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contactUs;
