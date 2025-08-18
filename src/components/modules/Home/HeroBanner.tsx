"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import GradientTitle from "@/components/ui/gradientTitle";
import Link from "next/link";
import { useTypewriter } from "react-simple-typewriter";

const HeroBanner = () => {
  const [text] = useTypewriter({
    words: ["Crowdfunding & Investing Made Simple"],
    loop: 0,
  });

  return (
    <div className=" flex items-center justify-center px-6 min-h-screen">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl flex flex-col">
        <GradientTitle className="py-0 h-36" title={text} />
        <p className="mt-6 md:text-lg">
          Browse exciting projects, back the ones you believe in, and make an
          impact. Crowdfunding made simple and rewarding.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="/invest">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
