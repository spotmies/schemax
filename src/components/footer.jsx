import React from "react";

export default function FooterBar() {
  return (
    <div className=" w-[100vw]" id="footer">
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-1/3 lg:w-1/3 pr-4">
              <h2 className="text-lg gil-bold mb-4">About Us</h2>
              <p className="mb-4 text-justify">
                Schemax is a software product and technology services company
                based out of India (Hyderabad & Visakhapatnam), that started its
                operations in the year 2011, Schemax mission is to enable our
                customers with business value driven technology products, custom
                developed solutions and services.
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5">
              <h2 className="text-lg gil-bold mb-4">Useful Links</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="/#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#aboutUs" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#articles" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5">
              <h2 className="text-lg gil-bold mb-4">More</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="/#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#contactUs" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-lg gil-bold mb-4">Newsletter</h2>
              <p className="mb-4">
                Sign up for our newsletter and stay up-to-date with our latest
                news and offers.
              </p>
              <form className="flex mb-4">
                <input
                  className="outline-none bg-gray-800 text-gray-400 border-2 border-gray-700 py-2 px-3 w-full mr-2 rounded"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="bg-primary hover:bg-primary-dark text-white gil-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-8">
            © 2023 Schemax Expert Techno Crafts Private Limited. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
