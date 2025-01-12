import { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Our Amenities | Perfect Food & Gas",
  description: "Discover the wide range of amenities and services offered at Perfect Food & Gas locations, from Level 3 Electric Car Chargers to Car Wash services.",
};

export default function AmenitiesPage() {
  const amenities = [
    {
      title: "Level 3 Electric Car Chargers",
      description: "Coming to Bixby location soon",
      detailedDescription: `Level 3 DC Fast Chargers deliver high-powered charging up to 350kW, capable of adding up to 200 miles of range in just 15 minutes. Compatible with most modern EVs including:

• Tesla (with adapter)
• Ford Mustang Mach-E
• Chevrolet Bolt
• Hyundai IONIQ 5
• Kia EV6
• Volkswagen ID.4
• Nissan LEAF (CHAdeMO)

Features CCS and CHAdeMO connectors to support all fast-charging capable vehicles.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
        </svg>
      ),
    },
    {
      title: "Fuel Options",
      description: "Diesel, Red Diesel, Unleaded, Ethanol Free Gas, Premium Ethanol Free Gas",
      detailedDescription: `We offer a comprehensive range of fuel options to meet every need:

• Regular Unleaded: 87 octane for everyday vehicles
• Diesel: Clean, high-quality diesel fuel for trucks and diesel engines
• Red Diesel: For off-road and agricultural equipment
• Ethanol Free Gas: Pure gasoline for better mileage and small engines
• Premium Ethanol Free: 91 octane, ideal for high-performance vehicles

All our fuels meet or exceed EPA standards for quality and cleanliness.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v5.25a2.25 2.25 0 0 1-2.25 2.25h-6a2.25 2.25 0 0 1-2.25-2.25v-5.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
      ),
    },
    {
      title: "Free Air",
      description: "Complimentary air service for your tires",
      detailedDescription: `Our free air service includes:

• Digital tire pressure gauge
• Heavy-duty air compressor
• Easy-to-use air hose
• Recommended tire pressure guide
• Available 24/7 at most locations

Properly inflated tires improve fuel efficiency, handling, and tire life.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ),
    },
    {
      title: "Car Wash",
      description: "Fully Automatic Car Wash Service",
      detailedDescription: `Our state-of-the-art automatic car wash features:

• Touchless washing system for gentle yet thorough cleaning
• High-pressure water jets to remove tough dirt
• Triple-foam polish for superior shine
• Spot-free rinse system
• Undercarriage wash
• Wheel and tire cleaning
• Power dry system

Multiple wash packages available to suit your needs. Typical wash time: 3-5 minutes.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: "Drive Thru",
      description: "Available at select locations",
      detailedDescription: `Our convenient drive-thru service offers:

• Quick and easy ordering
• Full menu available
• Fresh food and beverages
• Breakfast items available during morning hours
• Card and cash payments accepted
• Average service time under 3 minutes

Perfect for busy commuters and families on the go. Call ahead ordering available at participating locations.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      title: "Lottery",
      description: "Lottery tickets available",
      detailedDescription: `We offer a full range of Oklahoma Lottery products:

• Powerball
• Mega Millions
• Scratchers
• Pick 3
• Cash 5
• Lucky for Life

Must be 18 or older to purchase. Please play responsibly. Winning tickets can be redeemed at any of our locations.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
        </svg>
      ),
    },
    {
      title: "Payment Options",
      description: "Oklahoma EBT / Food Stamps and all major payment cards, including Fuel cards",
      detailedDescription: `We accept a wide variety of payment methods:

• Credit Cards (Visa, MasterCard, American Express, Discover)
• Debit Cards
• Oklahoma EBT / SNAP Benefits
• Fleet Cards
• Fuel Cards (WEX, Voyager, Fuelman)
• Mobile Payments (Apple Pay, Google Pay)
• Cash

All transactions are secure and processed instantly. ATM available on-site.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
    },
  ];

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
          <h1 className="text-5xl font-bold text-white">Our Amenities</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg text-gray-600 max-w-3xl mb-12 text-center">
          At Perfect Food & Gas, we offer a comprehensive range of services and amenities to make your visit convenient and enjoyable. Please note that some amenities may vary by location.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 cursor-help">{amenity.title}</h3>
              </div>
              <p className="text-gray-600">{amenity.description}</p>
              
              {amenity.detailedDescription && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <div className="bg-white rounded-lg shadow-xl p-4 border border-red-100 relative">
                    <div className="text-gray-700 whitespace-pre-line text-sm">
                      {amenity.detailedDescription}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-red-100"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            * Amenities may vary by location. Please contact your local store for specific services available.
          </p>
        </div>
      </div>
    </Layout>
  );
}