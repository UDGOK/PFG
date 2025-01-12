"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"

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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white"
          >
            Terms of Use
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Perfect Food & Gas. By accessing our website, visiting our stores, using our fuel services, or participating in our rewards program, you agree to these Terms of Use and our Privacy Policy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Use of Our Services</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">In-Store and Fuel Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Follow all posted safety instructions at fuel pumps</li>
                <li>No smoking near fuel pumps or storage areas</li>
                <li>Turn off vehicle engines while refueling</li>
                <li>Use only approved containers for fuel storage</li>
                <li>Supervise children at all times</li>
                <li>Report any spills or safety concerns immediately</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Website Use</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate information when using our services</li>
                <li>Do not attempt to access restricted areas of the website</li>
                <li>Do not use the website for any illegal purposes</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Rewards Program</h2>
            <p className="text-gray-700 mb-4">
              Participation in our rewards program is subject to additional terms and conditions. Points earned through the program:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cannot be transferred or sold</li>
              <li>Have no cash value</li>
              <li>May expire according to program rules</li>
              <li>May be revoked if obtained through fraud</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-500 pb-2 mt-12">Prohibited Activities</h2>
            <div className="bg-red-50 p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <p className="text-gray-700 mb-4 font-semibold">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Smoking near fuel pumps</li>
                <li>Using cell phones while fueling</li>
                <li>Leaving vehicles unattended while fueling</li>
                <li>Harassment of staff or other customers</li>
                <li>Tampering with fuel equipment</li>
              </ul>
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
                For questions about these terms, contact us at:
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