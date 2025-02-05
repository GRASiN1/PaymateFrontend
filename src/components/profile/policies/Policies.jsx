import React from "react";

export default function Policies() {
  return (
    <div className="w-full min-h-screen p-8 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Policies & Terms
        </h1>

        {/* Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🔒 Privacy Policy</h2>
          <p>
            We collect necessary user data such as name, email, and transaction
            history to enhance user experience. All data is securely stored and
            only accessible by authorized personnel. Users can request to edit,
            download, or delete their data at any time.
          </p>
        </section>

        {/* Terms of Service */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">📄 Terms of Service</h2>
          <p>
            By using this platform, you agree to abide by our rules, including
            providing accurate expense data and refraining from fraudulent
            activities. We reserve the right to terminate accounts that violate
            these terms.
          </p>
        </section>

        {/* Cookie Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🍪 Cookie Policy</h2>
          <p>
            Our website uses cookies for authentication, analytics, and
            improving user experience. Users can manage cookie preferences in
            their browser settings.
          </p>
        </section>

        {/* Security Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">🛡️ Security Policy</h2>
          <p>
            We implement advanced encryption and authentication methods to
            secure user data. Users are encouraged to use strong passwords.
          </p>
        </section>

        {/* Fair Usage Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">⚖️ Fair Usage Policy</h2>
          <p>
            Excessive use of services, spamming, or automated access to our
            platform may result in account suspension.
          </p>
        </section>

        {/* Community Guidelines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            🤝 Community Guidelines
          </h2>
          <p>
            Users must maintain respectful communication and avoid offensive
            content. Violation of guidelines may lead to account restrictions.
          </p>
        </section>
      </div>
    </div>
  );
}
