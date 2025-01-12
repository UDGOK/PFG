"use client"

import { useState, useEffect } from "react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [position, setPosition] = useState(0)
  const [oilPrice, setOilPrice] = useState<string | null>(null)
  const [dieselPrice, setDieselPrice] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      })
      setCurrentTime(`🕒 ${dateFormatter.format(now)} CST`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    // Fetch crude oil and diesel prices
    const fetchPrices = async () => {
      try {
        // Fetch crude oil price
        const oilResponse = await fetch(
          `https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${process.env.NEXT_PUBLIC_EIA_API_KEY}&frequency=daily&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=1`
        );
        const oilData = await oilResponse.json();
        
        // Fetch diesel price
        const dieselResponse = await fetch(
          `https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${process.env.NEXT_PUBLIC_EIA_API_KEY}&frequency=weekly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=1`
        );
        const dieselData = await dieselResponse.json();

        if (oilData?.response?.data?.[0]?.value) {
          const priceValue = parseFloat(oilData.response.data[0].value);
          if (!isNaN(priceValue)) {
            setOilPrice(`⛽ WTI Crude: $${priceValue.toFixed(2)}/bbl`);
          }
        }

        if (dieselData?.response?.data?.[0]?.value) {
          const priceValue = parseFloat(dieselData.response.data[0].value);
          if (!isNaN(priceValue)) {
            setDieselPrice(`🚛 Diesel: $${priceValue.toFixed(2)}/gal`);
          }
        }
      } catch (error) {
        console.error('Error fetching prices:', error);
        setOilPrice('⛽ WTI Crude: Loading...');
        setDieselPrice('🚛 Diesel: Loading...');
      }
    };

    fetchPrices();
    const priceInterval = setInterval(fetchPrices, 300000); // Update every 5 minutes

    const scrollInterval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -2000) return 0;
        return prev - 1;
      });
    }, 30);

    return () => {
      clearInterval(scrollInterval);
      clearInterval(priceInterval);
      clearInterval(timeInterval);
    };
  }, []);

  if (!isVisible) return null;

  const announcements = [
    "🎉 Coming Soon: More Perfect Food & Gas Locations! Stay tuned for new stores in your area!",
    oilPrice || "⛽ Loading prices...",
    dieselPrice || "🚛 Loading prices...",
    currentTime
  ].filter(Boolean).join(" | ");

  return (
    <div className="bg-[#e51937] h-7 flex items-center justify-between overflow-hidden relative">
      <div 
        className="whitespace-nowrap text-white text-sm font-medium"
        style={{ 
          transform: `translateX(${position}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <span className="inline-block px-4">
          {announcements} | {announcements}
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200 z-10"
        aria-label="Close announcement"
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