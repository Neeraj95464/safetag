// import React from "react";

// const TrueinPartner = () => {
//   return (
//     <section className="bg-gradient-to-tr from-blue-50 via-white to-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10 sm:p-12 md:p-16">
//         <h1 className="text-4xl font-extrabold text-blue-900 mb-8 text-center sm:text-left">
//           Partner Spotlight: Truein
//         </h1>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10">
//           Truein is an advanced AI-based face recognition attendance system
//           designed to simplify and secure workforce management. It ensures
//           precise, effortless, and paperless attendance tracking for
//           organizations of all sizes.
//         </p>

//         <div className="space-y-10">
//           <section>
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               How Truein Works
//             </h2>
//             <p className="text-gray-700 leading-relaxed max-w-prose">
//               Truein uses mobile-based facial recognition to mark attendance
//               seamlessly. Employees can simply take a selfie from approved
//               locations, and the system automatically verifies identity, time,
//               and geolocation in real time.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               Key Features
//             </h2>
//             <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-prose">
//               <li>
//                 Accurate Face Recognition: Detects faces even with masks,
//                 beards, spectacles, or hairstyle changes.
//               </li>
//               <li>
//                 Selfie-Based Geofencing: Clock in/out from smartphones with GPS
//                 verification.
//               </li>
//               <li>
//                 Offline Attendance: Record attendance without internet; data
//                 syncs automatically.
//               </li>
//               <li>
//                 Customizable Policies: Over 70 rules for shifts, overtime,
//                 leaves, and reporting.
//               </li>
//               <li>
//                 Easy Integration: Works with popular HRMS and payroll platforms
//                 via API.
//               </li>
//               <li>
//                 Reports & Analytics: Rich insights and automated reports for
//                 payroll.
//               </li>
//             </ul>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               Key Benefits
//             </h2>
//             <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-prose">
//               <li>Boosts productivity by automating attendance management.</li>
//               <li>Cost-effective solution, no expensive hardware needed.</li>
//               <li>Scalable for organizations of all sizes.</li>
//             </ul>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               Security and Privacy
//             </h2>
//             <p className="text-gray-700 max-w-prose leading-relaxed">
//               Truein ensures high-level data protection through secure cloud
//               storage and consent-based authentication. Employees’ face data and
//               GPS tracking are processed under privacy compliance standards.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               Our Partnership
//             </h2>
//             <p className="text-gray-700 max-w-prose leading-relaxed">
//               We are proud to partner with <strong>Truein</strong> to bring
//               intelligent, contactless, and policy-driven attendance technology
//               to our clients. Together, we empower organizations to maintain
//               transparency, accuracy, and efficiency across their workforce
//               operations.
//             </p>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrueinPartner;

import React from "react";

const FeatureCard = ({ icon, title, desc }) => (
  <div className="rounded-2xl bg-white p-6 ring-1 ring-teal-100 shadow-sm hover:shadow-lg hover:ring-teal-200 transition-all duration-300">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center shadow">
        <svg
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-slate-600">{desc}</p>
    </div>
  </div>
);

const TrueinPartner = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-3 py-1 text-white text-xs font-semibold ring-1 ring-white/30">
                Authorized Gold Partner
              </span>
              <span className="text-teal-200">•</span>
              <span className="text-xs text-teal-100">
                AI-Powered Attendance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Truein — Smart Face Recognition Attendance
            </h1>

            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl leading-relaxed">
              An advanced AI-based face recognition attendance system that
              simplifies and secures workforce management with precise,
              effortless, and paperless tracking.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-teal-700 font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
              >
                Request Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white bg-white/10 backdrop-blur ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="mt-1 text-sm text-teal-100">Accuracy</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">AI</div>
                <div className="mt-1 text-sm text-teal-100">Powered</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">
                  Offline
                </div>
                <div className="mt-1 text-sm text-teal-100">Mode Support</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">70+</div>
                <div className="mt-1 text-sm text-teal-100">Policies</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-slate-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  How Truein Works
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Truein uses mobile-based facial recognition to mark attendance
                  seamlessly. Employees can simply take a selfie from approved
                  locations, and the system automatically verifies identity,
                  time, and geolocation in real time.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 p-8 ring-1 ring-teal-200">
                  <svg
                    className="h-32 w-32 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div id="features" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Key Features
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Advanced technology designed for modern workforce management.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              }
              title="Accurate Face Recognition"
              desc="Detects faces even with masks, beards, spectacles, or hairstyle changes, ensuring 100% accurate attendance tracking."
            />
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              title="Selfie-Based Geofencing"
              desc="Clock in/out from smartphones with GPS verification, ensuring attendance is marked only from approved locations."
            />
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              }
              title="Offline Attendance"
              desc="Record attendance without internet connectivity; data syncs automatically once the connection is restored."
            />
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
              title="Customizable Policies"
              desc="Over 70 attendance policies can be customized to automate OT, leaves, shifts, and reports for any organization."
            />
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Easy Integration"
              desc="Seamlessly integrates with popular HRMS and payroll software via API for streamlined operations."
            />
            <FeatureCard
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              }
              title="Reports & Analytics"
              desc="Detailed reports and analytics make managing payroll easy, eliminating manual report creation."
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Key Benefits
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Transform your attendance management with measurable results.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <BenefitItem
              title="Increased Productivity"
              desc="Automates attendance tracking, reducing administrative costs and supervision time significantly."
            />
            <BenefitItem
              title="Cost-Effective"
              desc="Eliminates the need for complex hardware or standalone attendance machines, saving infrastructure costs."
            />
            <BenefitItem
              title="Scalable Solution"
              desc="Suitable for organizations of all sizes, from 1 to 50,000 employees, growing with your business."
            />
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mt-16">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Security & Privacy First
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Truein ensures high-level data protection through secure cloud
                  storage and consent-based authentication. Your data is always
                  safe and compliant.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Secure Cloud Storage
                      </h4>
                      <p className="mt-1 text-slate-300">
                        Enterprise-grade cloud infrastructure ensures your data
                        security and privacy at all times.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Consent-Based Authentication
                      </h4>
                      <p className="mt-1 text-slate-300">
                        Employees' face data and GPS tracking are processed
                        strictly under privacy compliance standards with full
                        consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    100%
                  </div>
                  <div className="text-slate-300">Privacy Compliant</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    256-bit
                  </div>
                  <div className="text-slate-300">Encryption</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    Cloud
                  </div>
                  <div className="text-slate-300">Secure Storage</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    GDPR
                  </div>
                  <div className="text-slate-300">Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div
          id="contact"
          className="mt-16 rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-1 shadow-2xl"
        >
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Our Partnership with Truein
                </h3>
                <p className="text-lg text-slate-700">
                  We are proud to partner with <strong>Truein</strong> to bring
                  intelligent, contactless, and policy-driven attendance
                  technology to our clients. Together, we empower organizations
                  to maintain transparency, accuracy, and efficiency across
                  their workforce operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:sales@example.com"
                  className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3.5 text-white font-bold shadow-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transform transition-all duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-teal-700 bg-teal-50 ring-1 ring-teal-200 hover:bg-teal-100 transition"
                >
                  View All Partners
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrueinPartner;
