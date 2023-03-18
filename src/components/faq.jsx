"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "Our company offers a range of IT services, including software development, web design and development, mobile app development, cloud computing, and IT consulting.",
  },
  {
    id: 2,
    question: "How can I request a quote for your services?",
    answer:
      "You can request a quote for our services by filling out our online contact form or by giving us a call. We'll get back to you as soon as possible with a quote based on your specific needs.",
  },
  {
    id: 3,
    question: "What industries do you specialize in?",
    answer:
      "We have experience working with clients in a range of industries, including healthcare, finance, education, and e-commerce. However, we are always open to working with new clients in any industry.",
  },
  {
    id: 4,
    question: "What is your approach to project management?",
    answer:
      "We use an agile project management approach, which allows us to be flexible and adapt to changing client needs throughout the development process. Our project managers work closely with clients to ensure that projects are completed on time and within budget.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance for your projects?",
    answer:
      "Yes, we offer ongoing support and maintenance for all of our projects. We understand that technology is constantly evolving, and we want to make sure that our clients' projects continue to function properly and meet their needs over time.",
  },
  {
    id: 6,
    question: "What is your process for ensuring the security of client data?",
    answer:
      "We take the security of our clients' data very seriously. We use industry-standard security protocols and take measures to ensure that all client data is stored and transmitted securely.",
  },
  {
    id: 7,
    question: "Can you work with clients outside of your geographic region?",
    answer:
      "Yes, we can work with clients anywhere in the world. We use video conferencing and other collaboration tools to communicate with clients remotely and ensure that projects are completed on time and within budget.",
  },
  {
    id: 8,
    question: "What is your pricing structure?",
    answer:
      "Our pricing structure varies depending on the specific project and client needs. We offer competitive pricing and work with clients to ensure that projects are completed within their budgetary constraints.",
  },
  {
    id: 9,
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for a project can vary depending on the complexity of the project and client needs. We work closely with clients to establish project timelines and ensure that projects are completed on time and within budget.",
  },
];

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

function Faq() {
  const [selectedId, setSelectedId] = useState(null);

  const toggleQuestion = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className="w-[100vw] bg-slate-200" id="faq">
      <div className="w-[90%] container mx-auto py-12  rounded-sm m-auto ">
        <h2 className="text-3xl md:text-5xl gil-bold mb-8 text-center text-primary">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row justify-between w-full items-center m-auto h-full ">
          <img
            src="https://images.unsplash.com/photo-1544535830-9df3f56fff6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="faq"
            className="w-full md:w-[45%] object-cover rounded-md h-[330px] md:h-[630px] mt-[-10px]"
          />

          <div className="max-w-xl pt-4 md:pt-0">
            {/* <h2 className="text-3xl gil-bold mb-4 text-center">
              Frequently Asked Questions
            </h2> */}
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-sm shadow-sm overflow-hidden mb-4"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full p-4 flex flex-row items-center justify-between text-left font-semibold text-primary"
                >
                  {faq.question}
                  {selectedId === faq.id ? (
                    <AiOutlineMinus className="text-2xl" />
                  ) : (
                    <AiOutlinePlus className="text-2xl" />
                  )}
                </button>

                <motion.div
                  variants={variants}
                  animate={selectedId === faq.id ? "open" : "closed"}
                  className="px-4"
                >
                  <p className="text-gray-600 pb-4">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
