import { ReactNode } from "react"
import Link from "next/link"
import Navigation from "./navigation"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-primary-foreground text-primary py-2 shadow-sm z-[55]">
        <div className="w-full px-4">
          <div className="container flex justify-end">
            <div className="flex space-x-6 items-center">
            <Link href="/locations" className="hover:text-primary/80">
              Find a Store
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/20 rounded-full px-4 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg
                className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Main Header */}
      <header className="bg-primary text-primary-foreground py-4 shadow-lg z-[60] mt-12">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold">Perfect Food & Gas</h1>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6 mt-8">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Perfect Food & Gas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}