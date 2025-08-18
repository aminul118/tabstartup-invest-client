"use client";
import { Button } from "@/components/ui/button";
import GradientTitle from "@/components/ui/gradientTitle";
import { GlobalErrorProps } from "@/types";

const Error = ({ error, reset }: GlobalErrorProps) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-lg rounded-lg  bg-opacity-30 p-6 text-center shadow-xl">
        <GradientTitle
          title="Oops! Something Went Wrong."
          description={
            error.message ||
            "An unexpected error occurred. We’re working on it!"
          }
        />
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default Error;
