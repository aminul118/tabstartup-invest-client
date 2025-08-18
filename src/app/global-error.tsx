"use client";

import { Button } from "@/components/ui/button";
import GradientTitle from "@/components/ui/gradientTitle";
import { GlobalErrorProps } from "@/types";

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      data-aos="fade-up"
    >
      <div className="w-full max-w-md rounded-lg p-8 text-center shadow-lg">
        <GradientTitle
          title="Something Went Wrong"
          description={error.message || "An unexpected error occurred"}
        />
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default GlobalError;
