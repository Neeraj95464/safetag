import React from "react";

const Bullet = ({ className = "" }) => (
  <span
    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow ${className}`}
  >
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M20 7l-9 9-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ring-1 ring-blue-200">
    {children}
  </span>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
    <div className="text-3xl font-extrabold text-slate-900">{value}</div>
    <div className="mt-1 text-slate-600">{label}</div>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="rounded-2xl bg-white/80 backdrop-blur p-6 ring-1 ring-slate-200 hover:shadow-md transition">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
);

const YottaPartner = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-blue-50 min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-white/70 p-8 md:p-12 shadow-xl ring-1 ring-slate-200 backdrop-blur">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200">
                  Authorized Gold Partner
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-600">
                  Enterprise Cloud Platform
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Yotta Cloud — scalable, secure, and cost‑effective
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                A comprehensive cloud platform delivering flexible scaling,
                advanced security, and high reliability with transparent,
                pay‑as‑you‑go pricing tailored to your business.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Talk to us
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-blue-700 bg-blue-50 ring-1 ring-blue-200 hover:bg-blue-100"
                >
                  Explore services
                </a>
              </div>
            </div>

            <div className="grid w-full max-w-md grid-cols-3 gap-4 md:max-w-sm">
              <Stat value="30%+" label="Lower cloud costs" />
              <Stat value="99.99%" label="Uptime & redundancy" />
              <Stat value="PAYG" label="Pay‑as‑you‑go pricing" />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Key features
          </h2>
          <p className="mt-2 text-slate-600">
            Built for performance, control, and compliance.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M3 15a4 4 0 014-4h10a4 4 0 010 8H8A5 5 0 013 15z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 11a4 4 0 117.75-1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Scalability"
              desc="Scale compute, storage, and networking on demand to meet growth and spikes without re‑architecting."
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Security"
              desc="Defense‑in‑depth with encryption, firewalls, access controls, and continuous monitoring."
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M3 7h18M3 12h18M3 17h18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Reliability"
              desc="High availability with redundancy and SLAs to minimize downtime and ensure continuity."
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M4 6h16M4 12h10M4 18h7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Flexibility"
              desc="Support for diverse OSs, databases, and runtimes for truly customized solutions."
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M4 4h16v10H4z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M2 20h20" stroke="currentColor" strokeWidth="2" />
                </svg>
              }
              title="Cost‑effective"
              desc="Transparent, usage‑based billing to optimize spend without sacrificing performance."
            />
            <Feature
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M12 3v18M3 12h18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="No lock‑in"
              desc="Portable architectures and open standards reduce vendor lock‑in risk."
            />
          </div>
        </div>

        {/* Services */}
        <div id="services" className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Services
          </h2>
          <p className="mt-2 text-slate-600">
            Everything needed from infrastructure to applications.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Bullet />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                IaaS
              </h3>
              <p className="mt-2 text-slate-600">
                Compute, storage, and networking with elastic capacity and
                granular controls.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Bullet />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                PaaS
              </h3>
              <p className="mt-2 text-slate-600">
                Managed runtimes, CI/CD, and observability to accelerate app
                delivery.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Bullet />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                SaaS
              </h3>
              <p className="mt-2 text-slate-600">
                Ready‑to‑use business apps with enterprise security and
                compliance.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Bullet />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Data storage
              </h3>
              <p className="mt-2 text-slate-600">
                Durable, secure storage tiers for hot, warm, and archival
                datasets.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Bullet />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Disaster recovery
              </h3>
              <p className="mt-2 text-slate-600">
                Cross‑region replication and tested runbooks for fast recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Cost comparison highlight */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-1 shadow-lg">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Reduce cloud spend by up to 30%
                </h3>
                <p className="mt-2 text-slate-700">
                  Competitive pricing with flexible models, transparent billing,
                  and no hidden fees.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 md:w-1/2">
                <Stat value="30%+" label="Cost savings" />
                <Stat value="0" label="Hidden fees" />
                <Stat value="Flex" label="Pricing options" />
              </div>
            </div>
          </div>
        </div>

        {/* Industries and Audience */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Industries
            </h2>
            <p className="mt-2 text-slate-600">
              Sector‑ready solutions and compliance.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Finance</Chip>
              <Chip>Healthcare (HIPAA)</Chip>
              <Chip>E‑commerce</Chip>
              <Chip>Education</Chip>
              <Chip>SaaS</Chip>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Target audience
            </h2>
            <p className="mt-2 text-slate-600">
              Built for teams of any size and maturity.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  Businesses
                </h4>
                <p className="mt-2 text-slate-600">
                  SMBs to large enterprises needing secure, scalable cloud.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  Developers
                </h4>
                <p className="mt-2 text-slate-600">
                  Modern tooling, open standards, and fast iteration loops.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  IT teams
                </h4>
                <p className="mt-2 text-slate-600">
                  Governance, security, and observability at scale.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  Ops & FinOps
                </h4>
                <p className="mt-2 text-slate-600">
                  Cost visibility and controls for predictable spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Benefits
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Increased agility
              </h4>
              <p className="mt-2 text-slate-600">
                Provision and scale resources quickly to meet demand.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Improved security
              </h4>
              <p className="mt-2 text-slate-600">
                Advanced protections for data, apps, and infra.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Cost savings
              </h4>
              <p className="mt-2 text-slate-600">
                Optimize utilization with pay‑as‑you‑go pricing.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Collaboration
              </h4>
              <p className="mt-2 text-slate-600">
                Cloud‑native tools that boost team productivity.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Elastic scale
              </h4>
              <p className="mt-2 text-slate-600">
                Scale up or down to match changing workloads.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          id="contact"
          className="mt-16 rounded-3xl bg-white p-8 md:p-10 shadow-xl ring-1 ring-slate-200"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Ready to modernize on Yotta Cloud?
              </h3>
              <p className="mt-2 text-slate-600">
                Get a customized migration and cost optimization plan.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:sales@example.com"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Book a demo
              </a>
              <a
                href="/partners"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-blue-700 bg-blue-50 ring-1 ring-blue-200 hover:bg-blue-100"
              >
                View all partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YottaPartner;
