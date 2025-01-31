"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export default function Home() {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <div className="flex flex-row gap-8 items-center align-center">
          <span>Stargate.ai</span>
          <span className="text-white text-lg font-thin">Coming soon to a galaxy near you</span>
        </div>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
