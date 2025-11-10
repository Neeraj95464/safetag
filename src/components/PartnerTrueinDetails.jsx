export function PartnerTrueinDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md my-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        Truein Face Recognition Attendance System
      </h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        An AI-powered application designed to accurately track employee
        attendance. Here's how it works and its key features:
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>Accurate Face Recognition:</strong> Recognizes faces even
            with masks, beards, hairstyles, or spectacles, ensuring 100%
            accurate attendance tracking.
          </li>
          <li>
            <strong>Selfie-Based Geofencing:</strong> Employees clock in/out
            with GPS location capture to ensure attendance is marked only from
            approved locations.
          </li>
          <li>
            <strong>Offline Attendance:</strong> Staff can clock in/out without
            internet and data syncs automatically once online.
          </li>
          <li>
            <strong>Customizable Attendance Policies:</strong> Over 70 policies
            to automate OT, leaves, shifts, and reports.
          </li>
          <li>
            <strong>Integration with HRMS/Payroll:</strong> Easy API integration
            with popular HRMS and payroll software.
          </li>
          <li>
            <strong>Reports and Analytics:</strong> In-depth reports simplify
            payroll management and eliminate manual reporting.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
          Benefits
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>Increased Productivity:</strong> Automates attendance and
            reduces administrative time.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Removes need for complex hardware
            or standalone machines.
          </li>
          <li>
            <strong>Scalable:</strong> Suitable for organizations from 1 to
            50,000 employees.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">
          Security and Privacy
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>Secure Cloud Storage:</strong> Enterprise-grade cloud
            infrastructure for data security and privacy.
          </li>
          <li>
            <strong>Consent-Based:</strong> Options to obtain consent for GPS
            and face recognition authentication.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          ¹ ² References to applicable compliance and data privacy standards.
        </p>
      </section>
    </div>
  );
}
