"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SliderAnimation from "@/components/SliderAnimation";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  return (
    <div>
      <div className="h-24 w-full bg-red-50 p-2 overflow-x-hidden"></div>
      <SliderAnimation />
      
    </div>
  );
}
