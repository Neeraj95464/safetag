import React from "react";

const FeatureCard = ({ icon, title, desc }) => (
  <div className="rounded-2xl bg-white p-6 ring-1 ring-purple-100 shadow-sm hover:shadow-lg hover:ring-purple-200 transition-all duration-300">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-md">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow">
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

const FactoHRPartner = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-purple-800 p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-3 py-1 text-white text-xs font-semibold ring-1 ring-white/30">
                Authorized Gold Partner
              </span>
              <span className="text-purple-200">•</span>
              <span className="text-xs text-purple-100">
                Modern HRMS Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              FactoHR — Mobile-First HRMS Platform
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl leading-relaxed">
              A plug-and-play HRMS solution that automates daily HR functions,
              from payroll to performance management, with enterprise-grade
              security.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-purple-700 font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
              >
                Schedule a Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white bg-white/10 backdrop-blur ring-1 ring-white/30 hover:bg-white/20 transition"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="mt-1 text-sm text-purple-100">Automation</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">SAP</div>
                <div className="mt-1 text-sm text-purple-100">
                  Certified Partner
                </div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">SOC 2</div>
                <div className="mt-1 text-sm text-purple-100">Certified</div>
              </div>
              <div className="rounded-xl bg-white/10 backdrop-blur p-4 ring-1 ring-white/20">
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="mt-1 text-sm text-purple-100">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div id="features" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Comprehensive HR Management
            </h2>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage your workforce efficiently, all in
              one platform.
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
              title="Employee Self-Service"
              desc="Empower employees to manage their own data, leave balances, attendance records, and tax statements through an intuitive portal."
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Automated Payroll"
              desc="Process payroll with complete statutory compliance including TA, DA, and other government regulations. Minimize errors and save time."
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Attendance Tracking"
              desc="Real-time attendance monitoring with geo-fencing and biometric integration for accurate time tracking across locations."
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
              title="Performance Management"
              desc="Set goals, provide continuous feedback, and conduct evaluations with customizable review forms and 360-degree feedback."
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Recruitment Management"
              desc="Streamline hiring with automated workflows, candidate tracking, interview scheduling, and seamless onboarding."
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
              title="Document Management"
              desc="Centralize all employee documents with secure storage, version control, and easy access for authorized personnel."
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Travel & Expense"
              desc="Manage employee travel and expenses with policy checks, automated approvals, and real-time tracking."
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose FactoHR
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Transform your HR operations with measurable results.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <BenefitItem
              title="Increased Efficiency"
              desc="Automate manual tasks and free up HR resources to focus on strategic initiatives. Reduce administrative overhead significantly."
            />
            <BenefitItem
              title="Improved Accuracy"
              desc="Minimize errors in payroll processing and attendance tracking with intelligent automation and validation rules."
            />
            <BenefitItem
              title="Enhanced Employee Experience"
              desc="Provide employees with a modern self-service portal to access their information anytime, anywhere on any device."
            />
            <BenefitItem
              title="Data-Driven Insights"
              desc="Leverage comprehensive reports and analytics to make informed decisions about your workforce and operations."
            />
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mt-16">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Enterprise-Grade Security
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Your data deserves the highest level of protection. FactoHR
                  ensures watertight security and complete compliance.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Data Encryption
                      </h4>
                      <p className="mt-1 text-slate-300">
                        Encryption at rest with SOC Type 2 certified cloud data
                        centers ensuring maximum security.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-purple-400"
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
                        Role-Based Access
                      </h4>
                      <p className="mt-1 text-slate-300">
                        Granular permissions and customizable access controls
                        for sensitive HR data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    SOC 2
                  </div>
                  <div className="text-slate-300">Type 2 Certified</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    256-bit
                  </div>
                  <div className="text-slate-300">Encryption</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    100%
                  </div>
                  <div className="text-slate-300">Compliance</div>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/20">
                  <div className="text-4xl font-extrabold text-white mb-2">
                    24/7
                  </div>
                  <div className="text-slate-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration */}
        <div className="mt-16">
          <div className="rounded-3xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-slate-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Seamless Integration
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Connect with your existing tools and systems effortlessly.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 ring-1 ring-purple-200">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  SAP Partnership
                </h3>
                <p className="text-slate-700">
                  Certified SAP partner delivering integrated HRMS, payroll,
                  attendance, and retirement benefit solutions for enterprises.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 ring-1 ring-blue-200">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Biometric Integration
                </h3>
                <p className="text-slate-700">
                  Seamlessly connect with biometric devices supporting retina,
                  thumb, voice, and face scanning for secure attendance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          id="contact"
          className="mt-16 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 p-1 shadow-2xl"
        >
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Ready to transform your HR operations?
                </h3>
                <p className="text-lg text-slate-700">
                  Join thousands of organizations using FactoHR to automate HR
                  functions and improve employee experience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:sales@example.com"
                  className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3.5 text-white font-bold shadow-lg hover:bg-purple-700 hover:shadow-xl hover:scale-105 transform transition-all duration-200"
                >
                  Get Started
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-purple-700 bg-purple-50 ring-1 ring-purple-200 hover:bg-purple-100 transition"
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

export default FactoHRPartner;
