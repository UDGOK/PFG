"use client"

import Layout from "@/components/layout"

export default function TermsOfUsePage() {
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
          <h1 className="text-5xl font-bold text-white">Terms of Use</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            Welcome to Perfect Food & Gas. By accessing our website, visiting our stores, using our fuel services, or participating in our rewards program, you agree to these Terms of Use and our Privacy Policy.
          </p>

          <h2>Use of Our Services</h2>
          <h3>In-Store and Fuel Services</h3>
          <ul>
            <li>Follow all posted safety instructions at fuel pumps</li>
            <li>No smoking near fuel pumps or storage areas</li>
            <li>Turn off vehicle engines while refueling</li>
            <li>Use only approved containers for fuel storage</li>
            <li>Supervise children at all times</li>
            <li>Report any spills or safety concerns immediately</li>
          </ul>

          <h3>Website Use</h3>
          <ul>
            <li>Provide accurate information when using our services</li>
            <li>Do not attempt to access restricted areas of the website</li>
            <li>Do not use the website for any illegal purposes</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>Rewards Program</h2>
          <p>
            Participation in our rewards program is subject to additional terms and conditions. Points earned through the program:
          </p>
          <ul>
            <li>Cannot be transferred or sold</li>
            <li>Have no cash value</li>
            <li>May expire according to program rules</li>
            <li>May be revoked if obtained through fraud</li>
          </ul>

          <h2>Payment and Pricing</h2>
          <ul>
            <li>All prices are in US dollars</li>
            <li>Fuel prices are subject to change without notice</li>
            <li>We accept major credit cards and cash</li>
            <li>Some locations may accept additional payment methods</li>
          </ul>

          <h2>Liability Limitations</h2>
          <p>
            Perfect Food & Gas is not liable for:
          </p>
          <ul>
            <li>Damage to vehicles from improper fueling</li>
            <li>Personal injury from failure to follow safety instructions</li>
            <li>Loss or theft of personal belongings</li>
            <li>Website downtime or technical issues</li>
            <li>Indirect or consequential damages</li>
          </ul>

          <h2>Prohibited Activities</h2>
          <p>
            The following activities are strictly prohibited:
          </p>
          <ul>
            <li>Smoking near fuel pumps</li>
            <li>Using cell phones while fueling</li>
            <li>Leaving vehicles unattended while fueling</li>
            <li>Harassment of staff or other customers</li>
            <li>Tampering with fuel equipment</li>
          </ul>

          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these terms, contact us at:
          </p>
          <p>
            Perfect Food & Gas<br />
            7675 E 51st St<br />
            Tulsa, OK 74145<br />
            Email: yuba@pfgstores.com<br />
            Phone: 405-962-9394
          </p>

          <p className="text-sm text-gray-600 mt-8">Last Updated: January 12, 2025</p>
        </div>
      </div>
    </Layout>
  )
}