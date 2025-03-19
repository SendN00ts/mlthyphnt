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
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
          <div className="Header mt-20">
            <h1 className="mt-[-2rem] text-4xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-7xl">
              mlthyphnt
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center px-4">
            <div className="md:-ml-16 lg:-ml-32 xl:-ml-40">
              <Image
                src="/images/pumpcember.gif"
                alt="Decorative"
                width={500}
                height={500}
                className="mt-[-3rem] w-[80%] sm:w-[500px]"
                priority
                unoptimized
              />
            </div>
            <p className="text-center md:mt-25 lg:mt-25 md:mb-[-7rem] lg:mb-[-7rem] text-lg sm:text-lg md:text-2xl lg:text-3xl leading-loose tracking-widest text-black">
              Energy never dies it only ever shifts form - <br />
              fragments weave and realign. <br />
              Motion never stops. <br />
              Web3 vibrates, <br /> AI sparks - <br />
              Narratives bend in the flux,
            </p>
          </div>
          <div className="flex justify-center mt-10 md:mt-25 md:mr-26 lg:mr-35 xl:ml-110">
            <p
              onClick={() =>
                window.open(
                  "https://0rqe3jewuid.typeform.com/to/kBxNeYrF",
                  "_blank"
                )
              }
              className="tracking-widest star-cursor text-black hover:text-[#174714] transition-colors duration-300 cursor-pointer text-sm sm:text-base"
            >
              ✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧ Fully booked for now but let&apos;s plan something
              soon! ✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧
            </p>
          </div>
        </section>

        {/* Images Section - Optimized, No Parallax */}
        <div style={{ marginBottom: "-10vh" }}>
          <section className="px-6 pt-12 pb-16 bg-[#9b948f] w-full">
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