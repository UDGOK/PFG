import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Layout from '@/components/layout'

const leadership = [
  {
    name: 'John Doe',
    title: 'CEO',
    bio: 'With over 20 years of experience...',
    image: '/images/leadership/john-doe.jpg'
  },
  {
    name: 'Jane Smith',
    title: 'COO',
    bio: 'Specializing in operational excellence...',
    image: '/images/leadership/jane-smith.jpg'
  }
]

export default function LeadershipPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d]">
        <div className="absolute inset-0 bg-opacity-50 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6">Our Leadership</h1>
            <p className="text-xl text-gray-200">
              Meet the visionary team driving our success and shaping the future of our company.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-48 h-48 relative rounded-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">{leader.name}</h2>
                    <p className="text-lg text-gray-600 mt-2">{leader.title}</p>
                    <p className="text-gray-500 mt-4">{leader.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Transition Section */}
      <div className="relative h-64 bg-gradient-to-b from-white to-[#1a1a1a]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-white mb-6">
              Building the Future Together
            </h2>
            <p className="text-xl text-gray-200">
              Our leadership team is committed to innovation, growth, and community impact.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}