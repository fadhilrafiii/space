"use client";

import { motion } from "framer-motion";

import { useContext, useLayoutEffect, useRef, useState } from "react";

import Button from "@/components/Button";
import Stars from "@/components/Stars";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import SpacePlane from "@/components/Model/SpacePlane";
import WindowSizeContext from "@/libs/contexts/windowSizeContext";

const Landing = () => {
  const [moonLight, setMoonLight] = useState(0);
  const containerRef = useRef(null);
  const moonRef = useRef(null);
  const windowSize = useContext(WindowSizeContext);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top top",
          end: "bottom 40%",
          onUpdate: (self) => {
            setMoonLight(
              +((self.progress * 100 + 10) * windowSize.width) / 1920
            );
          },
        },
      });
      tl.to(
        moonRef.current,
        {
          ease: "circ",
          top: "-15%",
          opacity: 1,
          filter: "drop-shadow(0 0 60px #fff)",
        },
        0
      );
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={containerRef}
      id="fadhil-muhammad"
      name="fadhil-muhammad"
      className="landing w-full min-h-[calc(100vh+100px)] relative"
    >
      <Stars />
      <Image
        ref={moonRef}
        style={{
          filter: `drop-shadow(0px 0px ${moonLight}px #fff) drop-shadow(0px 0px ${
            moonLight / 4
          }px #fce0d1)`,
        }}
        className="moon absolute right-[8%] top-[80%] opacity-0"
        src="/images/moon.png"
        alt="Moon"
        width={240}
        height={240}
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
      />

      <div className="min-h-[400px] absolute bottom-0 w-full">
        <Image
          src="/images/earth-surface.png"
          alt="Earth Surface"
          priority
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      {windowSize.width > 768 && (
        <motion.div
          initial={{
            transform: "translateY(40px)",
            opacity: 0,
          }}
          animate={{
            transform: "translateY(0)",
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
          }}
          className="px-8 md:px-20 bg-[rgba(0,0,0,0.4)] md:bg-transparent absolute h-screen w-screen flex flex-col justify-center pb-24 md:pb-10"
        >
          <h4 className="mb-2 text-xs md:text-xl text-white opacity-70 font-secondary text tracking-wide">
            Welcome to my Space! It&apos;s me
          </h4>
          <h1
            style={{ position: "relative", zIndex: 2 }}
            className="text-5xl md:text-7xl text-white font-primary mb-2 md:mb-5 font-medium"
          >
            Fadhil Muhammad
          </h1>
          <h2 className="text-2xl md:text-4xl text-white font-primary mb-3 md:mb-6">
            I&apos;m a <span className="job-title text-accent"></span>
          </h2>
          <p className="text-xs md:text-base text-white max-w-full md:max-w-[640px] opacity-75 mb-8">
            Software Engineer with 2++ years working experiences. Passionate
            about Progressive Web App and System Design. Had various work on web
            development, implementing web designs and architecting application
            features system design. Keen to maximize user experience and learn
            continuously on system design.
          </p>
          <div className="flex gap-8 absolute bottom-[32px] justify-evenly md:relative md:bottom-0 md:justify-start w-[calc(100%-64px)]">
            <Button type="link" mode={Button.Mode.Outlined} href="#aku">
              Explore
            </Button>
            <Button type="link" mode={Button.Mode.Filled}>
              Visit 3D Space
            </Button>
          </div>
        </motion.div>
      )}
      <Canvas
        eventSource={containerRef.current}
        style={{ position: "absolute", top: 0, left: 0 }}
        resize={{ scroll: false }}
      >
        <Stage environment="night">
          <SpacePlane rotation={[-0.5, -2, 0]} />
        </Stage>
      </Canvas>
      {windowSize.width > 768 ? (
        <div className="px-8 md:px-20 bg-[rgba(0,0,0,0.4)] md:bg-transparent absolute h-screen w-screen flex flex-col justify-center pb-24 md:pb-10">
          <h4 className="opacity-0 mb-2 text-xs md:text-xl text-white font-secondary text tracking-wide">
            Welcome to my Space! It&apos;s me
          </h4>
          <h1
            style={{ position: "relative", zIndex: 2 }}
            className="opacity-0 text-5xl md:text-7xl text-white font-primary mb-2 md:mb-5 font-medium"
          >
            Fadhil Muhammad
          </h1>
          <h2 className="opacity-0 text-2xl md:text-4xl text-white font-primary mb-3 md:mb-6">
            I&apos;m a <span className="job-title text-accent"></span>
          </h2>
          <p className="opacity-0 text-xs md:text-base text-white max-w-full md:max-w-[640px] mb-8">
            Software Engineer with 2++ years working experiences. Passionate
            about Progressive Web App and System Design. Had various work on web
            development, implementing web designs and architecting application
            features system design. Keen to maximize user experience and learn
            continuously on system design.
          </p>
          <div className="flex gap-8 absolute bottom-[32px] justify-evenly md:relative md:bottom-0 md:justify-start w-[calc(100%-64px)]">
            <Button
              type="link"
              mode={Button.Mode.Outlined}
              href="#aku"
              style={{ color: "transparent", borderColor: "transparent" }}
            >
              Explore
            </Button>
            <Button
              type="link"
              mode={Button.Mode.Filled}
              style={{ backgroundColor: "transparent" }}
            >
              Visit 3D Space
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{
            transform: "translateY(40px)",
            opacity: 0,
          }}
          animate={{
            transform: "translateY(0)",
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
          }}
          className="px-8 md:px-20 bg-[rgba(0,0,0,0.4)] md:bg-transparent absolute h-screen w-screen flex flex-col justify-center pb-24 md:pb-10"
        >
          <h4 className="mb-2 text-xs md:text-xl text-white opacity-70 font-secondary text tracking-wide">
            Welcome to my Space! It&apos;s me
          </h4>
          <h1
            style={{ position: "relative", zIndex: 2 }}
            className="text-5xl md:text-7xl text-white font-primary mb-2 md:mb-5 font-medium"
          >
            Fadhil Muhammad
          </h1>
          <h2 className="text-2xl md:text-4xl text-white font-primary mb-3 md:mb-6">
            I&apos;m a <span className="job-title text-accent"></span>
          </h2>
          <p className="text-xs md:text-base text-white max-w-full md:max-w-[640px] opacity-75 mb-8">
            Software Engineer with 2++ years working experiences. Passionate
            about Progressive Web App and System Design. Had various work on web
            development, implementing web designs and architecting application
            features system design. Keen to maximize user experience and learn
            continuously on system design.
          </p>
          <div className="flex gap-8 absolute bottom-[32px] justify-evenly md:relative md:bottom-0 md:justify-start w-[calc(100%-64px)]">
            <Button type="link" mode={Button.Mode.Outlined} href="#aku">
              Explore
            </Button>
            <Button type="link" mode={Button.Mode.Filled}>
              Visit 3D Space
            </Button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Landing;
