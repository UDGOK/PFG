"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"

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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Perfect Food & Gas (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our convenience stores, use our fuel services, or interact with our website.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Information We Collect</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">In Our Stores and at Our Fuel Stations</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Transaction data (purchases, payment information)</li>
              <li>Rewards program membership information</li>
              <li>Security camera footage for safety and security</li>
              <li>Fuel purchase data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">On Our Website</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Contact information when you reach out to us</li>
              <li>Location data for finding nearest stores</li>
              <li>Device information and browsing data</li>
              <li>Newsletter subscription information</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To process your transactions and fuel purchases</li>
              <li>To manage your rewards program membership</li>
              <li>To improve our products and services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To maintain the security of our stores and fuel stations</li>
              <li>To comply with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for transactions</li>
              <li>Law enforcement when required by law</li>
              <li>Professional advisors and insurers</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Perfect Food & Gas<br />
                7675 E 51st St<br />
                Tulsa, OK 74145<br />
                Email: yuba@pfgstores.com<br />
                Phone: 405-962-9394
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-sm text-gray-500 mt-12 text-center">Last Updated: January 12, 2025</p>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}