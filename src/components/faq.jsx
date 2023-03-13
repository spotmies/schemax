"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo feugiat leo, eu venenatis augue consequat quis. Vestibulum nec iaculis eros. Suspendisse potenti.",
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer:
      "Pellentesque aliquet velit ac mi venenatis scelerisque. Nulla accumsan volutpat dolor, eu feugiat massa fringilla eu. Suspendisse nec libero vitae metus pharetra ultricies at a arcu.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Cras at aliquam nibh. Fusce imperdiet euismod orci, in aliquam nunc dignissim ut. Sed eget ullamcorper orci, sit amet blandit neque. Proin ultricies ligula in metus laoreet, eget facilisis sapien dapibus.",
  },
  {
    id: 4,
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo feugiat leo, eu venenatis augue consequat quis. Vestibulum nec iaculis eros. Suspendisse potenti.",
  },
  {
    id: 5,
    question: "How do I track my order?",
    answer:
      "Pellentesque aliquet velit ac mi venenatis scelerisque. Nulla accumsan volutpat dolor, eu feugiat massa fringilla eu. Suspendisse nec libero vitae metus pharetra ultricies at a arcu.",
  },
  {
    id: 6,
    question: "Do you offer international shipping?",
    answer:
      "Cras at aliquam nibh. Fusce imperdiet euismod orci, in aliquam nunc dignissim ut. Sed eget ullamcorper orci, sit amet blandit neque. Proin ultricies ligula in metus laoreet, eget facilisis sapien dapibus.",
  },
  {
    id: 7,
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo feugiat leo, eu venenatis augue consequat quis. Vestibulum nec iaculis eros. Suspendisse potenti.",
  },
  {
    id: 8,
    question: "How do I track my order?",
    answer:
      "Pellentesque aliquet velit ac mi venenatis scelerisque. Nulla accumsan volutpat dolor, eu feugiat massa fringilla eu. Suspendisse nec libero vitae metus pharetra ultricies at a arcu.",
  },
  {
    id: 9,
    question: "Do you offer international shipping?",
    answer:
      "Cras at aliquam nibh. Fusce imperdiet euismod orci, in aliquam nunc dignissim ut. Sed eget ullamcorper orci, sit amet blandit neque. Proin ultricies ligula in metus laoreet, eget facilisis sapien dapibus.",
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
    <div className="w-[100vw]">
      <div className="w-[90%] container mx-auto py-12 bg-slate-200 rounded-sm">
        <h2 className="text-3xl gil-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-row justify-between w-[90%] items-center m-auto h-full">
          <img
            src="https://images.unsplash.com/photo-1544535830-9df3f56fff6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="faq"
            className="w-[40%] object-cover rounded-md h-[630px] mt-[-10px]"
          />
          <div className="max-w-xl mx-auto">
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
                  className="w-full p-4 flex flex-row items-center justify-between text-left font-semibold"
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
