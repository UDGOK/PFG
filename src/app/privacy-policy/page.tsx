"use client"

import Layout from "@/components/layout"

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="relative h-96 w-full mb-12">
        <video
          src="/videos/people-at-pump.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Perfect Food & Gas (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our convenience stores, use our fuel services, or interact with our website.
          </p>

          <h2>Information We Collect</h2>
          <h3>In Our Stores and at Our Fuel Stations</h3>
          <ul>
            <li>Transaction data (purchases, payment information)</li>
            <li>Rewards program membership information</li>
            <li>Security camera footage for safety and security</li>
            <li>Fuel purchase data</li>
          </ul>

          <h3>On Our Website</h3>
          <ul>
            <li>Contact information when you reach out to us</li>
            <li>Location data for finding nearest stores</li>
            <li>Device information and browsing data</li>
            <li>Newsletter subscription information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To process your transactions and fuel purchases</li>
            <li>To manage your rewards program membership</li>
            <li>To improve our products and services</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To maintain the security of our stores and fuel stations</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Payment processors for transactions</li>
            <li>Law enforcement when required by law</li>
            <li>Professional advisors and insurers</li>
          </ul>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. This includes secure payment processing, encrypted data storage, and regular security assessments.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Perfect Food & Gas<br />
            7675 E 51st St<br />
            Tulsa, OK 74145<br />
            Email: yuba@pfgstores.com<br />
            Phone: 405-962-9394
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last Updated&rdquo; date and the updated version will be effective as soon as it is posted.
          </p>

          <p className="text-sm text-gray-600 mt-8">Last Updated: January 12, 2025</p>
        </div>
      </div>
    </Layout>
  )
}