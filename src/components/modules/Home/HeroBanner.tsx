import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import GradientTitle from "@/components/ui/gradientTitle";

const HeroBanner = () => {
  return (
    <div className=" flex items-center justify-center px-6 min-h-screen">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl flex flex-col">
        <GradientTitle
          className="py-0"
          title=" Crowdfunding & Investing Made Simple"
        />
        <p className="mt-6 text-[17px] md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
