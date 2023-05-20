"use client";
import Atropos from "atropos/react";
import { Playfair_Display } from "next/font/google";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
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
    <main className="min-h-dscreen flex flex-col">
      <div className="flex flex-grow justify-center w-full">
        <div className="flex w-10/12 my-6">
          <div className="flex flex-col justify-center xl:w-full">
            <div className="mt-6">
              <Atropos
                shadow={false}
                className="flex flex-col 2xl:2/4 xl:w-3/4 lg:3/4 md:w-3/4 sm:w-full w-full"
              >
                <h1
                  className={
                    playfair.className +
                    " 2xl:text-9xl xl:text-8xl md:text-7xl sm:text-6xl text-6xl font-bold"
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
                    playfair.className +
                    " mt-8 xl:text-3xl md:text-2xl text-xl text-zinc-500"
                  }
                >
                  Code. Capture. Inspire. ✨
                </p>
              </Atropos>
              <div className="h-10"></div>
              <div className="max-w-2xl xl:text-2xl md:text-xl text-lg xl:text-left md:text-left text-justify">
                <p className="my-4 text-stone-700">
                  👋 Hi there! I&apos;m a senior software engineer at
                  GlowRadius, passionate about building remarkable web
                  applications, micro backends, and network security solutions.
                  With a keen eye for detail and a drive for innovation, I
                  strive to create seamless digital experiences that elevate
                  businesses to new heights.
                </p>

                <p className="my-4 text-stone-700">
                  When I&apos;m not immersed in code, you&apos;ll often find me
                  exploring the world with my camera in hand, capturing
                  breathtaking landscapes and documenting my travels. I believe
                  that travel opens our minds, allowing us to embrace diverse
                  cultures and their vibrant culinary traditions. Just as I
                  enjoy savoring authentic dishes from around the globe, I find
                  great joy in experimenting with flavors and creating delicious
                  meals in my own kitchen. 🌍🍽️
                </p>

                <p className="my-4 text-stone-700">
                  Welcome to my digital haven, where technology meets
                  wanderlust, and where passion meets professionalism.
                  Let&apos;s embark on a visual and technological adventure
                  together. 🚀✨
                </p>
              </div>
              <div className="h-16"></div>
              <div className="h-24">
                <div>
                  <p className="text-xl">
                    📬 Reach out to me at{" "}
                    <Link href="mailto:me@agnibesh.dev" className="border-b-2 cursor-pointer border-pink-300 hover:text-pink-300 border-dotted transition-all">
                      me@agnibesh.dev
                    </Link>
                  </p>
                </div>
                <div className="h-6"></div>
                <ul className="flex items-start gap-5">
                  <li className="border-b-2 border-gray-600 hover:text-gray-600 hover:border-b-4 transition-all cursor-pointer">
                    <Link href="https://github.com/MightyPhoenix">GitHub</Link>
                  </li>
                  <li className="border-b-2 border-blue-600 hover:text-blue-600 hover:border-b-4 transition-all cursor-pointer">
                    <Link href="https://linkedin.com/in/mightyphoenix7">LinkedIn</Link>
                  </li>
                  <li className="border-b-2 border-cyan-600 hover:text-cyan-600 hover:border-b-4 transition-all cursor-pointer">
                    <Link href="https://twitter.com/hsebinga">Twitter</Link>
                  </li>
                  <li className="border-b-2 border-fuchsia-600 hover:text-fuchsia-600 hover:border-b-4 transition-all cursor-pointer">
                    <Link href="https://instagram.com/hsebinga">Instagram</Link>
                  </li>
                </ul>
              </div>
              <div className="h-16"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-16 grid place-content-center text-center py-2 border-t border-amber-600">
        <div className="text-gray-700">Made with love and ChatGpt</div>
        <div className="text-gray-700">
          &copy; Agnibe.sh {new Date().getFullYear()}
        </div>
      </div>
    </main>
  );
}
