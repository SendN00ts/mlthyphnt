"use client";

import Image from "next/image";

// Move image data outside component to prevent recreation on renders
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
  { src: "/images/Coin2.mp4", title: "Strategy Ops" },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <main className="relative h-auto bg-[#9b948f] text-[#174714]">
        {/* Hero Section - Reduced height */}
        <section className="flex flex-col items-center justify-center h-[85vh] px-6 text-center">
          {/* Flex container with order control for responsive layout */}
          <div className="flex flex-col items-center w-full">
            {/* Header - Order 2 on mobile (below), Order 1 on sm+ screens (above) */}
            <div className="Header md:-mt-[-10rem] lg:-mt-[-10rem] order-2 sm:order-1 mb-8 sm:mb-0">
              <h1 className="mt-[-1rem] text-4xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-7xl">
                mlthyphnt
              </h1>
            </div>
            
            {/* GIF - Order 1 on mobile (above), Order 2 on sm+ screens (below) */}
            <div className="sm:-ml-20 md:-ml-50 lg:-ml-150 xl:-ml-250 order-1 sm:order-2 mb-4 sm:mb-0">
              <Image
                src="/images/pumpcember.gif"
                alt="Decorative"
                width={500}
                height={500}
                className="mt-[1rem] w-[80%] sm:w-[500px]"
                priority
                unoptimized
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-10 md:mt-25 md:mr-26 lg:mr-35 xl:ml-110">
          </div>
        </section>

        {/* Images Section - Reduced top padding */}
        <div style={{ marginBottom: "-10vh", marginTop: "-5vh" }}>
          <section className="px-6 pt-4 pb-16 bg-[#9b948f] w-full mb-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col gap-8 mb-8">
                {imagePanels.map((panel, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden w-full h-[150px] sm:h-[176px]"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      {panel.src.endsWith(".mp4") ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          disablePictureInPicture
                          controlsList="nodownload nofullscreen noremoteplayback"
                          preload={index < 2 ? "auto" : "none"}
                          className="absolute w-full h-full object-cover pointer-events-none"
                          style={{
                            objectPosition: "center center",
                            pointerEvents: "none",
                          }}
                          onContextMenu={(e) => e.preventDefault()} 
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
                            objectPosition: "center center",
                          }}
                        />
                      )}
                    </div>
                    {panel.title && (
                      <div
                        className={`absolute inset-0 flex items-end pb-4 z-10 text-xs sm:text-base ${
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
        </div>

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