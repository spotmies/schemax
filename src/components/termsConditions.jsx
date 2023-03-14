import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <div className="w-[100vw]">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 w-full">
        <div className="relative py-3 w-[90%] m-auto">
          <div className="relative px-4 py-10 bg-white shadow-sm sm:rounded-sm sm:p-20">
            <div className="w-full m-auto">
              <h1 className="text-5xl font-semibold text-gray-800 text-center mb-5">
                Terms and Conditions
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Please read these terms and conditions carefully before using
                our website.
              </p>
              <div className="text-gray-700 mb-4">
                <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                <p>
                  These Website Standard Terms and Conditions written on this
                  webpage shall manage your use of our website, Webiste Name
                  accessible at www.example.com.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  Unless otherwise stated, we or our licensors own the
                  intellectual property rights in the website and material on
                  the website.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">3. Restrictions</h2>
                <p>
                  You are expressly and emphatically restricted from all of the
                  following:
                </p>
                <ul className="list-disc ml-8">
                  <li>publishing any website material in any media;</li>
                  <li>
                    selling, sublicensing and/or otherwise commercializing any
                    website material;
                  </li>
                  <li>
                    publicly performing and/or showing any website material;
                  </li>
                  <li>
                    using this website in any way that is, or may be, damaging
                    to this website;
                  </li>
                  <li>
                    using this website in any way that impacts user access to
                    this website;
                  </li>
                  <li>
                    using this website contrary to applicable laws and
                    regulations, or in a way that causes, or may cause, harm to
                    the website, or to any person or business entity;
                  </li>
                </ul>
                <br />
                <h2 className="text-lg font-semibold mb-2">4. No Warranties</h2>
                <p>
                  This website is provided "as is" without any representations
                  or warranties, express or implied. We make no representations
                  or warranties in relation to this website or the information
                  and materials provided on this website.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">
                  5. Limitations of Liability
                </h2>
                <p>
                  We will not be liable to you (whether under the law of
                  contact, the law of torts or otherwise) in relation to the
                  contents of, or use of, or otherwise in connection with, this
                  website:
                </p>
                <ul className="list-disc ml-8">
                  <li>
                    to the extent that the website is provided free-of-charge,
                    for any direct loss;
                  </li>
                  <li>for any indirect, special or consequential loss; or</li>
                  <li>
                    for any business losses, loss of revenue, income, profits or
                    anticipated savings, loss of contracts or business
                    relationships, loss of reputation or goodwill, or loss or
                    corruption of information or data.
                  </li>
                </ul>
                <br />
                <h2 className="text-lg font-semibold mb-2">
                  6. Revisions and Errata
                </h2>
                <p>
                  The materials appearing on this website could include
                  technical, typographical, or photographic errors. We will not
                  promise that any of the materials in this website are
                  accurate, complete, or current. We may change the materials
                  contained on this website at any time without notice. We do
                  not, however, make any commitment to update the materials.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">7. Links</h2>
                <p>
                  We have not reviewed all of the sites linked to this website
                  and is not responsible for the contents of any such linked
                  site. The inclusion of any link does not imply endorsement by
                  us of the site. Use of any such linked website is at the
                  user's own risk.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">
                  8. Site Terms of Use Modifications
                </h2>
                <p>
                  We may revise these terms of use for this website at any time
                  without notice. By using this website you are agreeing to be
                  bound by the then current version of these terms of use.
                </p>
                <br />
                <h2 className="text-lg font-semibold mb-2">9. Your Privacy</h2>
                <p>Please read our Privacy Policy.</p>
                <br />
                <h2 className="text-lg font-semibold mb-2">
                  10. Governing Law
                </h2>
                <p>
                  Any claim related to this website shall be governed by the
                  laws of the State of California without regards to its
                  conflict of law provisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
