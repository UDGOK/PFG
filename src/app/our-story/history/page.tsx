import { Timeline, TimelineItem } from '@/components/ui/timeline';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function HistoryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/hero/hero-image.jpg"
          alt="Our History"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">Our History</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              From humble beginnings to becoming a regional leader, our story is one of growth, innovation, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Timeline>
            <TimelineItem year="1965">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Beginning</h2>
                  <p className="text-gray-600 mb-6">
                    Our story began with a single convenience store in La Crosse, Wisconsin, founded by Don Zietlow with a vision to serve the community.
                  </p>
                  <p className="text-gray-600">
                    We focused on providing quality products at fair prices, quickly becoming a local favorite.
                  </p>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/images/hero/perfect-logo.jpg"
                    alt="First Store"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TimelineItem>

            <TimelineItem year="1980">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Expansion Era</h2>
                  <p className="text-gray-600 mb-6">
                    We expanded to 50 stores across the Midwest, introducing our first gas pumps and becoming a one-stop shop for our customers.
                  </p>
                  <p className="text-gray-600">
                    This period marked our commitment to convenience and quality fuel.
                  </p>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/images/hero/perfect-garnett.jpg"
                    alt="Expansion Era"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TimelineItem>

            <TimelineItem year="2000">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Modernization</h2>
                  <p className="text-gray-600 mb-6">
                    We implemented new technology, launched our rewards program, and introduced fresh food options.
                  </p>
                  <p className="text-gray-600">
                    Our stores became community hubs, offering more than just convenience.
                  </p>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/images/hero/perfect-fresh-bakery.jpeg"
                    alt="Modernization"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TimelineItem>

            <TimelineItem year="Present">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Today</h2>
                  <p className="text-gray-600 mb-6">
                    With over 800 locations, we continue to serve our communities with innovative products and services.
                  </p>
                  <p className="text-gray-600">
                    Our commitment to quality and community remains as strong as ever.
                  </p>
                </div>
                <div className="relative h-96">
                  <Image
                    src="/images/hero/perfect-sheridan.jpg"
                    alt="Today"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </Layout>
  );
}