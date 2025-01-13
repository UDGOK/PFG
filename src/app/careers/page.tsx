'use client';

import JobApplicationForm from '@/components/job-application-form';
import Layout from '@/components/layout';

export default function CareersPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          At Perfect Food and Gas, we&apos;re always looking for talented individuals who share our passion for excellent customer service and quality food. Join us in making a difference in our community.
        </p>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Competitive Pay</h3>
              <p className="text-gray-600 text-center">
                We offer competitive wages and regular performance-based raises to reward your hard work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Flexible Scheduling</h3>
              <p className="text-gray-600 text-center">
                We work with you to create a schedule that fits your life and commitments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Growth Opportunities</h3>
              <p className="text-gray-600 text-center">
                We believe in promoting from within and providing opportunities for career advancement.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>
          <JobApplicationForm />
        </div>

        {/* Contact Section */}
        <div className="text-center text-gray-600 mt-8">
          <p>
            Have questions about working with us?{' '}
            <a href="mailto:yuba@pfgstores.com" className="text-red-600 hover:text-red-800">
              Contact our HR team
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}