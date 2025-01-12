"use client"

import Layout from "@/components/layout"

export default function AccessibilityPage() {
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
          <h1 className="text-5xl font-bold text-white">Accessibility</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Our Commitment to Accessibility</h2>
          <p>
            Perfect Food & Gas is committed to ensuring our stores, fuel stations, and digital services are accessible to all customers, including those with disabilities. We strive to provide an inclusive experience for everyone who visits our locations or uses our services.
          </p>

          <h2>Physical Store Accessibility</h2>
          <h3>Store Features</h3>
          <ul>
            <li>Accessible parking spaces at all locations</li>
            <li>Wide aisles to accommodate wheelchairs and mobility devices</li>
            <li>Automatic doors at store entrances</li>
            <li>Accessible restroom facilities</li>
            <li>Clear, visible signage throughout stores</li>
            <li>Well-lit interior and exterior areas</li>
          </ul>

          <h3>Fuel Station Accessibility</h3>
          <ul>
            <li>Clearly marked accessible fuel pumps</li>
            <li>Call buttons for assistance at fuel stations</li>
            <li>Level, obstacle-free access to fuel pumps</li>
            <li>Easy-to-reach fuel pump handles and payment terminals</li>
          </ul>

          <h2>Service Animal Policy</h2>
          <p>
            We welcome service animals in all our locations. Service animals must be:
          </p>
          <ul>
            <li>Under the control of their handler at all times</li>
            <li>Harnessed, leashed, or tethered unless these devices interfere with the service animal&apos;s work</li>
            <li>Trained to perform specific tasks for individuals with disabilities</li>
          </ul>

          <h2>Digital Accessibility</h2>
          <p>
            Our website is designed to be accessible to users with disabilities. We follow Web Content Accessibility Guidelines (WCAG) 2.1 and include features such as:
          </p>
          <ul>
            <li>Alternative text for images</li>
            <li>Keyboard navigation support</li>
            <li>Clear heading structure</li>
            <li>Sufficient color contrast</li>
            <li>Resizable text without loss of functionality</li>
            <li>Compatible with screen readers</li>
          </ul>

          <h2>Employee Training</h2>
          <p>
            Our staff receives training on:
          </p>
          <ul>
            <li>Assisting customers with disabilities</li>
            <li>Proper etiquette and communication</li>
            <li>Operating accessibility equipment</li>
            <li>Emergency procedures for customers with disabilities</li>
          </ul>

          <h2>Feedback and Assistance</h2>
          <p>
            We welcome your feedback on how we can improve our accessibility. If you need assistance or have suggestions, please contact us:
          </p>
          <p>
            Perfect Food & Gas<br />
            7675 E 51st St<br />
            Tulsa, OK 74145<br />
            Email: yuba@pfgstores.com<br />
            Phone: 405-962-9394
          </p>

          <h2>Continuous Improvement</h2>
          <p>
            We regularly review and update our accessibility features and welcome suggestions for improvement. Our goal is to ensure all customers can access our services comfortably and independently.
          </p>

          <p className="text-sm text-gray-600 mt-8">Last Updated: January 12, 2025</p>
        </div>
      </div>
    </Layout>
  )
}