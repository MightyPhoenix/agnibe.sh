"use client";
import Atropos from "atropos/react";
import { Playfair_Display } from "next/font/google";
import { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const bounceAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        const randomHeight = Math.floor(Math.random() * (20 - 10 + 1)) + 20; // Randomize bounce height between 10 and 75
        await next({
          transform: `translateY(-${randomHeight}px)`,
          config: { tension: 300, friction: 20, duration: 500 },
        });
        await next({
          transform: "translateY(0px)",
          config: { tension: 300, friction: 20, duration: 300 },
        });
      }
    },
    config: { tension: 300, friction: 20, duration: 0 },
  });

  return (
    <main className="min-h-dscreen flex justify-center ">
      <div className="flex w-10/12">
        <div className="flex flex-col justify-center xl:w-full">
          <Atropos shadow={false} className="flex flex-col w-3/4">
            <h1
              className={
                playfair.className +
                " xl:text-9xl md:text-8xl sm:text-7xl text-6xl font-bold mt-6"
              }
            >
              Agnibe
              <animated.span
                className="text-emerald-800 absolute"
                style={bounceAnimation}
              >
                .
              </animated.span>
              <span className="text-emerald-800 ml-4 xl:ml-8 md:ml-6 sm:ml-5">
                sh
              </span>
            </h1>
            <p
              className={
                playfair.className + " mt-8 xl:text-3xl text-2xl text-zinc-500"
              }
            >
              Code. Capture. Inspire. ✨
            </p>
          </Atropos>
          <div className="mt-12"></div>
          <div className="max-w-2xl">
            <Atropos
              shadow={false}
              className="mt-4 xl:text-xl text-md text-stone-700"
            >
              👋 Hi there! I&apos;m a senior software engineer at GlowRadius,
              passionate about building remarkable web applications, micro
              backends, and network security solutions. With a keen eye for
              detail and a drive for innovation, I strive to create seamless
              digital experiences that elevate businesses to new heights.
            </Atropos>

            <Atropos
              shadow={false}
              className="mt-4 xl:text-xl text-md text-stone-700"
            >
              When I&apos;m not immersed in code, you&apos;ll often find me
              exploring the world with my camera in hand, capturing breathtaking
              landscapes and documenting my travels. I believe that travel opens
              our minds, allowing us to embrace diverse cultures and their
              vibrant culinary traditions. Just as I enjoy savoring authentic
              dishes from around the globe, I find great joy in experimenting
              with flavors and creating delicious meals in my own kitchen. 🌍🍽️
            </Atropos>

            <Atropos
              shadow={false}
              className="mt-4 xl:text-xl text-md text-stone-700"
            >
              Welcome to my digital haven, where technology meets wanderlust,
              and where passion meets professionalism. Let&apos;s embark on a
              visual and technological adventure together. 🚀✨
            </Atropos>
          </div>
          <div className="mt-12 h-8">
            <p className="text-xl">
              📬 Reach out to me at{" "}
              <a className="border-b-2 cursor-pointer border-pink-300 hover:text-pink-300 border-dotted transition-all">
                me@agnibesh.dev
              </a>
            </p>
            <ul className="flex items-start gap-5 mt-6">
              <li className="border-b-2 border-gray-600 hover:text-gray-600 hover:border-b-4 transition-all cursor-pointer">
                GitHub
              </li>
              <li className="border-b-2 border-blue-600 hover:text-blue-600 hover:border-b-4 transition-all cursor-pointer">
                LinkedIn
              </li>
              <li className="border-b-2 border-cyan-600 hover:text-cyan-600 hover:border-b-4 transition-all cursor-pointer">
                Twitter
              </li>
              <li className="border-b-2 border-fuchsia-600 hover:text-fuchsia-600 hover:border-b-4 transition-all cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
