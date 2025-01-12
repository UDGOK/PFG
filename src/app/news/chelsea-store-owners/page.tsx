import Layout from "../../../components/layout"

export default function ChelseaStoreArticle() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Posted 9:26 PM, Jul 03, 2020 • Last updated 9:26 PM, Jul 03, 2020</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Chelsea Store Owners Give Back to Community</h1>
        </div>

        <div className="h-96 relative mb-8">
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

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Raj and Yuba Parajuli, owners of Perfect Food And Gas in Chelsea, Oklahoma, demonstrate their commitment to community service by donating a penny per gallon of gas sold to support the local police department.
          </p>
          
          <p className="mb-6">
            This initiative showcases the strong bond between local businesses and the community in Chelsea. The Parajuli brothers have been operating their store with a focus on giving back to the community that has supported them since day one.
          </p>

          <p className="mb-6">
            The donation program is expected to make a significant impact on the local police department's resources, helping them better serve and protect the Chelsea community. This partnership between Perfect Food And Gas and local law enforcement exemplifies how businesses can play a vital role in supporting essential community services.
          </p>

          <p>
            The Parajuli brothers continue to look for new ways to support their community, making Perfect Food And Gas not just a convenience store, but a cornerstone of community engagement in Chelsea, Oklahoma.
          </p>
        </div>
      </div>
    </Layout>
  )
}