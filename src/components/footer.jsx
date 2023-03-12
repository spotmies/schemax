import React from "react";

export default function FooterBar() {
  return (
    <div className=" w-[100vw]">
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-lg gil-bold mb-4">About Us</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eget mi euismod, dignissim lorem id, congue justo.
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-lg gil-bold mb-4">Useful Links</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-lg gil-bold mb-4">More</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
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
            © 2023 Schemax tech. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
