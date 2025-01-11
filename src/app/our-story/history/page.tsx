import { Timeline, TimelineItem } from '@/components/ui/timeline';
import Layout from '@/components/layout';

export default function HistoryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our History</h1>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <Timeline>
          <TimelineItem year="1965">
            <h2 className="text-2xl font-bold mb-4">The Beginning</h2>
            <p className="text-gray-600">
              Our story began with a single convenience store in La Crosse, Wisconsin...
            </p>
          </TimelineItem>

          <TimelineItem year="1980">
            <h2 className="text-2xl font-bold mb-4">Expansion Era</h2>
            <p className="text-gray-600">
              We expanded to 50 stores across the Midwest, introducing our first gas pumps...
            </p>
          </TimelineItem>

          <TimelineItem year="2000">
            <h2 className="text-2xl font-bold mb-4">Modernization</h2>
            <p className="text-gray-600">
              Implemented new technology and launched our rewards program...
            </p>
          </TimelineItem>

          <TimelineItem year="Present">
            <h2 className="text-2xl font-bold mb-4">Today</h2>
            <p className="text-gray-600">
              With over 800 locations, we continue to serve our communities...
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </Layout>
  );
}