"use client";
import { Button } from "@/components/ui/button";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-lg rounded-lg  bg-opacity-30 p-6 text-center shadow-xl">
        <h2 className="mb-4 text-4xl font-bold">Oops! Something Went Wrong.</h2>
        <p className="mb-6 text-lg">
          {error.message ||
            "An unexpected error occurred. We’re working on it!"}
        </p>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
};

export default Error;
