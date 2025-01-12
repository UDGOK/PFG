import Layout from "../../components/layout"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function NewsPage() {
  // Example news data - in a real app this would come from an API or CMS
  const newsArticles = [
    {
      id: 4,
      title: "Chelsea Store Owners Give Back to Community",
      date: "Posted 9:26 PM, Jul 03, 2020",
      excerpt: "Raj and Yuba Parajuli, owners of Perfect Food And Gas in Chelsea, Oklahoma, demonstrate their commitment to community service by donating a penny per gallon of gas sold to support the local police department.",
      image: "/images/hero/perfect-145th.jpg",
    },
    {
      id: 1,
      title: "Perfect Food & Gas Opens New Location on East 51st Street",
      date: "December 15, 2023",
      excerpt: "Perfect Food & Gas continues its expansion in Tulsa with the opening of its newest location at 14495 East 51st Street South, featuring our signature fresh food offerings and exceptional customer service.",
      image: "/images/hero/perfect-145th.jpg",
      link: "/news/145th-location"
    },
    {
      id: 2,
      title: "Introducing Our New Rewards Program",
      date: "December 15, 2023",
      excerpt: "We're excited to announce our new rewards program, offering more ways to save and earn points on every purchase at Perfect Food & Gas locations.",
      image: "/images/hero/perfect-garnett.jpg",
    },
    {
      id: 3,
      title: "Community Initiative Launch",
      date: "December 1, 2023",
      excerpt: "Perfect Food & Gas launches new community initiative supporting local schools and organizations across all our locations.",
      image: "/images/hero/perfect-sheridan.jpg",
    },
  ]

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
          <h1 className="text-5xl font-bold text-white">Latest News</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {article.id === 4 ? (
                <div className="h-48">
                  <div className="scripps_iframe_embed" style={{position: 'relative', height: '100%'}}>
                    <div style={{display:'block',width:'100%',height:'100%'}}></div>
                    <iframe
                      id="da-iframe"
                      style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}
                      src="https://assets.scrippsdigital.com/cms/video/player.html?video=https://content.uplynk.com/4a08d65053ab4526ae3a8d5c4879ef6f.m3u8&mp4=https://x-default-stgec.uplynk.com/ausw/slices/4a0/7fed36643eb2467f9bc52626aec24432/4a08d65053ab4526ae3a8d5c4879ef6f/4a08d65053ab4526ae3a8d5c4879ef6f_g.mp4&autoplay=false&purl=/news/local-news/chelsea-store-owner-helps-small-town-celebrate-july-4th&ads.iu=/6088/ssp.kjrh/news/local-news/chelsea-store-owner-helps-small-town-celebrate-july-4th&ads.proxy=1&poster=https://x-default-stgec.uplynk.com/ausw/slices/4a0/7fed36643eb2467f9bc52626aec24432/4a08d65053ab4526ae3a8d5c4879ef6f/poster_a26cde640c164725a1c493acd372b708.jpg&title=Chelsea%20store%20owner%20helps%20celebrate%20July%204th&kw=2%20works%20for%20you%2C2%20works%20for%20you%20news%2CPerfect%20Food%20And%20Gas%2Cchannel%202%20news%2Cchelsea%2C%20oklahoma%2Cgreen%20country%20news%2Ckjrh%2Clocal%20news%20tulsa%2Coklahoma%20news%2Ctulsa%20news&contplay=*recent&mute=0&tags=Homepage%20Showcase%2CLocal%20News&section=Local%20News&cust_params=temp%3D%26weather%3D&host=kjrh.com&s=kjrh&env=production&ex=1"
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay; fullscreen"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                {article.id === 4 ? (
                  <Link href="/news/chelsea-store-owners" className="text-red-600 hover:text-red-700 font-medium">
                    Read More →
                  </Link>
                ) : article.link ? (
                  <Link href={article.link} className="text-red-600 hover:text-red-700 font-medium">
                    Read More →
                  </Link>
                ) : (
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Read More →
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}