"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOurStoryOpen, setIsOurStoryOpen] = useState(false)
  const [isRewardsOpen, setIsRewardsOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false)
  const [isSavingsOpen, setIsSavingsOpen] = useState(false)
  const [isCommunityOpen, setIsCommunityOpen] = useState(false)
  const [isNutritionOpen, setIsNutritionOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)

  interface DropdownItem {
    href: string
    label: string
  }

  const createDropdown = (
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    title: string,
    items: DropdownItem[]
  ) => (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="#"
        className="hover:text-primary-foreground/80 transition-colors"
      >
        {title}
      </Link>
      <div
        className={`absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-[60] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
        aria-hidden={!isOpen}
        aria-expanded={isOpen}
        role="menu"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <nav className="space-x-4 relative z-[60] overflow-visible">
      {createDropdown(isOurStoryOpen, setIsOurStoryOpen, "Our Story", [
        { href: "/our-story/history", label: "History" },
        { href: "/our-story/leadership", label: "Leadership" },
        { href: "/our-story/values", label: "Values" }
      ])}
      
      {createDropdown(isRewardsOpen, setIsRewardsOpen, "Kwik Rewards", [
        { href: "/rewards/join", label: "Join Rewards" },
        { href: "/rewards/benefits", label: "Benefits" },
        { href: "/rewards/partners", label: "Partners" }
      ])}
      
      {createDropdown(isCareersOpen, setIsCareersOpen, "Careers", [
        { href: "/careers/opportunities", label: "Opportunities" },
        { href: "/careers/benefits", label: "Benefits" },
        { href: "/careers/apply", label: "Apply Now" }
      ])}
      
      {createDropdown(isSavingsOpen, setIsSavingsOpen, "Savings", [
        { href: "/savings/weekly-specials", label: "Weekly Specials" },
        { href: "/savings/coupons", label: "Coupons" },
        { href: "/savings/fuel-rewards", label: "Fuel Rewards" }
      ])}
      
      {createDropdown(isCommunityOpen, setIsCommunityOpen, "Community", [
        { href: "/community/events", label: "Events" },
        { href: "/community/donations", label: "Donations" },
        { href: "/community/partnerships", label: "Partnerships" }
      ])}
      
      {createDropdown(isNutritionOpen, setIsNutritionOpen, "Nutrition", [
        { href: "/nutrition/healthy-choices", label: "Healthy Choices" },
        { href: "/nutrition/allergens", label: "Allergen Info" },
        { href: "/nutrition/nutrition-facts", label: "Nutrition Facts" }
      ])}
      
      {createDropdown(isShopOpen, setIsShopOpen, "Shop", [
        { href: "/shop/groceries", label: "Groceries" },
        { href: "/shop/fuel", label: "Fuel" },
        { href: "/shop/merchandise", label: "Merchandise" }
      ])}
    </nav>
  )
}