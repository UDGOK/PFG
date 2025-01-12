"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"

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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white"
          >
            Accessibility
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2">Our Commitment to Accessibility</h2>
            <p className="text-gray-700 leading-relaxed">
              Perfect Food & Gas is committed to ensuring our stores, fuel stations, and digital services are accessible to all customers, including those with disabilities. We strive to provide an inclusive experience for everyone who visits our locations or uses our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Physical Store Accessibility</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Store Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accessible parking spaces at all locations</li>
                <li>Wide aisles to accommodate wheelchairs and mobility devices</li>
                <li>Automatic doors at store entrances</li>
                <li>Accessible restroom facilities</li>
                <li>Clear, visible signage throughout stores</li>
                <li>Well-lit interior and exterior areas</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fuel Station Accessibility</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clearly marked accessible fuel pumps</li>
                <li>Call buttons for assistance at fuel stations</li>
                <li>Level, obstacle-free access to fuel pumps</li>
                <li>Easy-to-reach fuel pump handles and payment terminals</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Service Animal Policy</h2>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <p className="text-gray-700 mb-4">
                We welcome service animals in all our locations. Service animals must be:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Under the control of their handler at all times</li>
                <li>Harnessed, leashed, or tethered unless these devices interfere with the service animal&apos;s work</li>
                <li>Trained to perform specific tasks for individuals with disabilities</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Digital Accessibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Website Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Alternative text for images</li>
                  <li>Keyboard navigation support</li>
                  <li>Clear heading structure</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Sufficient color contrast</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Compatible with screen readers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                We welcome your feedback on how we can improve our accessibility. If you need assistance or have suggestions, please contact us:
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