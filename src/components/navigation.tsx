import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="space-x-4">
      <Link 
        href="/locations" 
        className="hover:text-primary-foreground/80 transition-colors"
      >
        Locations
      </Link>
      <Link 
        href="/rewards" 
        className="hover:text-primary-foreground/80 transition-colors"
      >
        Rewards
      </Link>
      <Link 
        href="/careers" 
        className="hover:text-primary-foreground/80 transition-colors"
      >
        Careers
      </Link>
    </nav>
  )
}