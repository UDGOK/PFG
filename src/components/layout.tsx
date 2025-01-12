import { ReactNode } from "react"
import Link from "next/link"
import Navigation from "./navigation"
import Footer from "./footer"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-primary-foreground text-primary py-2 shadow-sm z-[55]">
        <div className="w-full px-4">
          <div className="container flex justify-end">
            <div className="flex space-x-6 items-center">
              <Link href="/locations" className="hover:text-primary/80">
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Navigation />

      <main className="flex-grow pt-20">{children}</main>

      <Footer />
    </div>
  );
}