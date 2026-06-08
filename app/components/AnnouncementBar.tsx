'use client';

import { useEffect, useState } from "react";

const messages = [
  "BACK IN STOCK — selling fast, don't miss out",
  "HIGH DEMAND — RESTOCK DONT MISS OUT!"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white text-center py-2 text-xs tracking-wide">
      {messages[index]}
    </div>
  );
}