"use client";
import React, { useState } from "react";
import HoverButton from "./reusableComponent/hoverButton";

function CareerSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Perform submission logic here, such as sending form data to a server

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div
        className="relative bg-cover bg-center bg-gray-800 py-24 w-[90%] m-auto rounded-sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-end justify-end">
          <div className="mt-2">
            <div className="">
              <h1 className="text-5xl gil-med tracking-tight text-white sm:text-5xl lg:text-6xl">
                Join our team
              </h1>
              <p className="mt-4 max-w-3xl text-xl text-gray-300">
                We're always looking for talented individuals to help us build
                amazing things.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="z-70">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 px-4 py-2 block w-full bg-transparent border border-white focus:outline-none focus:bg-transparent focus:ring-0 focus:border-white text-white rounded-sm shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 px-4 py-2 block w-full bg-transparent border border-white focus:outline-none focus:bg-transparent focus:ring-0 focus:border-white text-white rounded-sm shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 px-4 py-2 block w-full bg-transparent border border-white focus:outline-none focus:bg-transparent focus:ring-0 focus:border-white text-white rounded-sm shadow-sm"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="resume"
                    className="block text-lg font-medium text-gray-300"
                  >
                    Upload Resume
                  </label>
                  <div
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray
                -300 border-dashed rounded-md"
                  >
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path d="M14 14h20v20H14V14z" stroke="none" />
                        <path d="M4 4h40v40H4V4zm8 28h24M16 20l8 8 8-8" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer font-medium text-white hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            className="sr-only"
                            onChange={(e) => setResume(e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <HoverButton
                  type="submit"
                  text="Submit"
                  className="bg-transparent border border-white hover:bg-white hover:text-black"
                  icon={true}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerSection;
