import Layout from "../../../components/layout"
import Image from "next/image"

export default function NewLocationArticle() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Posted December 15, 2023</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Perfect Food & Gas Opens New Location on East 51st Street</h1>
        </div>

        <div className="h-96 relative mb-8">
          <Image
            src="/images/hero/perfect-145th.jpg"
            alt="Perfect Food & Gas 145th Location"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Perfect Food & Gas continues its expansion in Tulsa with the opening of its newest location at 14495 East 51st Street South. The store, which opened its doors in December 2023, marks another milestone in the company&apos;s commitment to serving the Tulsa community.
          </p>
          
          <p className="mb-6">
            The new location features the same high-quality service and convenience that customers have come to expect from Perfect Food & Gas, including fresh food options, quality fuel, and exceptional customer service. Operating with convenient hours from 5:30 AM to 11 PM on weekdays and Saturdays, and 7 AM to 10 PM on Sundays, the store is well-positioned to serve the growing East Tulsa community.
          </p>

          <p className="mb-6">
            &quot;We&apos;re excited to bring Perfect Food & Gas to East 51st Street,&quot; said a company spokesperson. &quot;This location allows us to better serve our customers in East Tulsa and provide them with the convenience and quality they deserve.&quot;
          </p>

          <p>
            The new store, which can be reached at (918) 367-2382, represents Perfect Food & Gas&apos;s ongoing commitment to growth and community service in the Tulsa area. Customers are invited to visit the new location and experience the Perfect Food & Gas difference for themselves.
          </p>
        </div>
      </div>
    </Layout>
  )
}