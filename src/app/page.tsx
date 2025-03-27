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
      <main className="relative h-auto bg-[#9b948f] text-[#174714]">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
          {/* Title Row with GIF */}
          <div className="flex flex-row items-center justify-center space-x-4 mx-auto ">
            {/* Star GIF */}
            <Image
              src="/images/pumpcember.gif"
              alt="Decorative Star"
              width={120}
              height={120}
              className="object-contain mt-[-15rem] sm:mt-[-9rem] ml-[-2rem] sm:ml-[-4rem] sm:w-[300px] sm:h-[300px]"
              priority
              unoptimized
            />
            
            {/* Title */}
            <h1 className="text-4xl font-bold tracking-widest text-xl sm:text-5xl md:text-6xl lg:text-7xl mt-[-16rem] sm:mt-[-10rem]">
              mlthyphnt
            </h1>
          </div>
        </section>

        {/* Images Section */}
        <div style={{ marginBottom: "-5vh", marginTop: "-7vh" }}>
          <section className="px-6 pt-4 pb-16 bg-[#9b948f] w-full mb-20 mt-[-18rem] sm:mt-[-10rem]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col gap-4 mb-4">
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