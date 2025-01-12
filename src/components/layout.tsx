import { ReactNode } from "react"
import Link from "next/link"
import Navigation from "./navigation"
import Footer from "./footer"
import AnnouncementBanner from "./announcement-banner"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-[55]">
        {/* Announcement Banner */}
        <AnnouncementBanner />
        
        {/* Find a Store */}
        <div className="bg-white text-gray-800 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-end py-1">
              <Link href="/locations" className="text-sm hover:text-[#e51937] transition-colors duration-200">
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-48">
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}