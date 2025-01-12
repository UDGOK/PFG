"use client"

import { useState, useEffect } from "react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -1000) return 0;
        return prev - 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-[#e51937] h-7 flex items-center justify-between overflow-hidden relative">
      <div 
        className="whitespace-nowrap text-white text-sm"
        style={{ 
          transform: `translateX(${position}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <span className="inline-block px-4">
          🎉 Coming Soon: More Perfect Food & Gas Locations! Stay tuned for new stores in your area!
        </span>
        <span className="inline-block px-4">
          🎉 Coming Soon: More Perfect Food & Gas Locations! Stay tuned for new stores in your area!
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}