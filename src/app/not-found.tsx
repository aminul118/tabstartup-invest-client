"use client";
import { Button } from "@/components/ui/button";
import GradientTitle from "@/components/ui/gradientTitle";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center text-center "
      data-aos="fade-up"
    >
      <Image
        src="/404.svg"
        alt="Error 404"
        width={0}
        height={0}
        sizes="100vw"
        className="mx-auto h-96 w-96"
      />
      <GradientTitle
        title="Page Not Found"
        description="Sorry, we couldn’t find the page you’re looking for."
      />
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
