"use client";

import Image from "next/image";
import { useEffect } from "react";

const imagePanels = [
  {
    src: "/images/AImonica.mp4",
    title: "AI Lore and Identity",
  },
  {
    src: "/images/FrensNetwork.jpg",
    title: "Network Alchemy",
    style: {
      objectPosition: "90% 49%",
    },
  },
  {
    src: "/images/Chandelier_optimized.mp4",
    title: "Convergences",
  },
  {
    src: "/images/cards2.jpg",
    title: "Tales & Perception",
  },
  {
    src: "/images/Coin2.mp4",
    title: "Strategy Ops",
  },
];

export default function Home() {
  // Add Chrome-specific fix using useEffect
  useEffect(() => {
    // Find all video elements and add CSS to hide controls in Chrome
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Force controls off - this works better than just setting the attribute
      video.controls = false;
      
      // Add specific CSS to hide controls in Chrome
      video.style.cssText += `
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        outline: none !important;
      `;
      
      // Set additional attributes that help prevent controls
      video.disablePictureInPicture = true;
      video.disableRemotePlayback = true;
      
      // Prevent right-click
      video.oncontextmenu = function() { return false; };
      
      // Prevent showing controls even on interaction
      video.addEventListener('click', function(e) {
        e.preventDefault();
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      {/* Global styles to hide video controls */}
      <style jsx global>{`
        /* Hide all video controls in Chrome */
        video::-webkit-media-controls,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-timeline,
        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display,
        video::-webkit-media-controls-time-remaining-display,
        video::-webkit-media-controls-mute-button,
        video::-webkit-media-controls-toggle-closed-captions-button,
        video::-webkit-media-controls-volume-slider,
        video::-webkit-media-controls-fullscreen-button,
        video::-webkit-media-controls-download-button,
        video::-webkit-media-controls-overflow-button,
        video::-webkit-media-controls-volume-slider-container,
        video::-webkit-media-controls-volume-slider-container *,
        video::-webkit-media-controls-enclosure {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          width: 0 !important;
          height: 0 !important;
          pointer-events: none !important;
        }
      `}</style>

      <main className="relative h-auto bg-[#9b948f] text-[#174714] flex flex-col">
        {/* Hero Section - Increased height for better desktop rendering */}
        <section className="w-full flex items-center justify-center py-8 px-6 mb-4" style={{ minHeight: "220px" }}>
          <div className="max-w-5xl mx-auto w-full">
            {/* Title and GIF container - Offset to the left */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8 mx-auto justify-start sm:justify-center sm:ml-[-50px] md:ml-[-80px] lg:ml-[-100px]">
              {/* Star GIF - Responsive sizing for better visibility across devices */}
              <div className="flex items-center justify-center w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
                <Image
                  src="/images/pumpcember.gif"
                  alt="Decorative Star"
                  width={240}
                  height={240}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                  priority={true}
                  unoptimized={true}
                />
              </div>

              {/* Title - Added padding to prevent cut-off */}
              <h1 className="text-3xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-7xl flex items-center py-2">
                mlthyphnt
              </h1>
            </div>
          </div>
        </section>

        {/* Images Section - Clear separation */}
        <section className="w-full px-6 pt-0 pb-16 bg-[#9b948f]" style={{ position: "relative" }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-4 mb-4">
              {imagePanels.map((panel, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden w-full h-[150px] sm:h-[176px] md:h-[200px]"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {panel.src.endsWith(".mp4") ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        preload={index < 2 ? "auto" : "none"}
                        className="absolute w-full h-full object-cover"
                        style={{
                          objectPosition: "center center",
                          pointerEvents: "none",
                          userSelect: "none",
                        }}
                      >
                        <source src={panel.src} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={panel.src}
                        alt={`Image ${index + 1}`}
                        fill
                        priority={index < 2}
                        loading={index < 2 ? undefined : "lazy"}
                        unoptimized={panel.src.endsWith(".gif")}
                        style={{
                          objectFit: "cover",
                          objectPosition: panel.style?.objectPosition || "center center",
                        }}
                      />
                    )}
                  </div>
                  {panel.title && (
                    <div
                      className={`absolute inset-0 flex items-end pb-4 z-10 text-xs sm:text-base md:text-lg ${
                        index % 2 === 0
                          ? "justify-start pl-4"
                          : "justify-end pr-4"
                      }`}
                    >
                      <h3 className="text-white font-bold tracking-wider text-shadow-lg">
                        {panel.title}
                      </h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 bg-[#9b948f] text-black">
          <div className="text-center">
            <p className="text-sm sm:text-base">© 2025.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}