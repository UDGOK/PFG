import Image from "next/image"
import { Button } from "@/components/ui/button"
import Layout from "@/components/layout"

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[400px]">
        <Image
          src="/images/hero/placeholder.svg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Welcome to Perfect Food & Gas</h2>
            <p className="text-lg mb-8">Your one-stop shop for quality fuel and delicious food</p>
            <div className="space-x-4">
              <Button className="bg-primary hover:bg-primary/90">Find a Location</Button>
              <Button variant="secondary">Join Rewards</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
