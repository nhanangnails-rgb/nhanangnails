"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const slides = [
  "/images/banner_1.png",
  "/images/banner_2.png",
  "/images/banner_3.png",
];

export default function HeroSlider({ dict }: { dict: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url('${slide}')` }}
          className={cn(
            "absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[1500ms] ease-in-out",
            currentSlide === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          )}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 to-black/60 z-20" />
      
      {/* Content */}
      <div className="relative z-30 max-w-3xl px-6 pt-20">
        <h1 
          className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fff0f2] to-[var(--color-primary)] text-7xl md:text-8xl lg:text-[10rem] font-script mb-6 py-4 leading-tight"
          style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))" }}
        >
          {dict.title}
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light mb-10">
          {dict.subtitle}
        </p>
        <Link
          href="https://m.me/nhanangnails"
          target="_blank"
          className="inline-block bg-[var(--color-primary)] text-white text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full shadow-[0_5px_15px_rgba(214,149,155,0.4)] hover:shadow-[0_8px_20px_rgba(214,149,155,0.6)] hover:-translate-y-1 transition-all duration-300"
        >
          {dict.button}
        </Link>
      </div>
    </section>
  );
}
