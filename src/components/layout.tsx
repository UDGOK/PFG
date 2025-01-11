import { ReactNode } from "react"
import Navigation from "./navigation"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 shadow-lg">
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