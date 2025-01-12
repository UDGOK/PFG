import { ReactNode } from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import AnnouncementBanner from "./announcement-banner"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white mb-8">
        {/* Announcement Banner */}
        <AnnouncementBanner className="mb-8" />
        

        {/* Navigation */}
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-40">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}