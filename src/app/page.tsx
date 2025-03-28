"use client";

import Image from "next/image";

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
  return (
    <div className="overflow-x-hidden w-full">
      <main className="relative h-auto bg-[#9b948f] text-[#174714] flex flex-col">
        {/* Hero Section - Increased height for better desktop rendering */}
        <section className="w-full flex items-center justify-center py-8 px-6 mb-4" style={{ minHeight: "220px" }}>
          <div className="max-w-5xl mx-auto w-full">
            {/* Title and GIF container - Offset to the left by adding negative margin/padding */}
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
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        preload={index < 2 ? "auto" : "none"}
                        className="absolute w-full h-full object-cover"
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