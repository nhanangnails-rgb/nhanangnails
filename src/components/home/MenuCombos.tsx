"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function MenuCombos({ dict }: { dict: any }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Create an array of 10 items for the 10 combos
  const combos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    imageSrc: `/images/combo${i + 1}.png`,
    alt: `Combo / Menu ${i + 1}`,
  }));

  // Prevent body scroll when lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section id="menu-combos" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">
            {dict.title}
          </h2>
          <p className="text-gray-500 text-lg">
            {dict.subtitle}
          </p>
          <i className="text-gray-500 text-sm">{dict.note}</i>
        </div>

        {/* Portrait Grid Layout: 2 columns on mobile, 3-5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {combos.map((combo) => (
            <div 
              key={combo.id} 
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gray-50 cursor-pointer"
              onClick={() => setSelectedImage(combo.imageSrc)}
            >
              {/* Portrait aspect ratio (2/3) */}
              <div className="w-full aspect-[2/3] bg-gray-100 flex items-center justify-center text-gray-400 text-sm overflow-hidden relative">
                
                {/* Placeholder instruction text */}
                <span className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-gray-300 rounded-2xl z-0 pointer-events-none">
                  <strong className="text-gray-500 mb-1">{dict.imageMissing} {combo.id}</strong>
                </span>

                {/* Main Image */}
                <img
                  src={combo.imageSrc}
                  alt={combo.alt}
                  className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Hide image if failed to load
                    e.currentTarget.style.opacity = '0';
                  }}
                  onLoad={(e) => {
                    // Show image when successfully loaded
                    e.currentTarget.style.opacity = '1';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 transition-opacity duration-300 opacity-100"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gray-300 transition-colors bg-white/20 hover:bg-white/40 p-3 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Detailed Image */}
          <img 
            src={selectedImage} 
            alt="Hình chi tiết" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking on the image itself
          />
        </div>
      )}
    </section>
  );
}
