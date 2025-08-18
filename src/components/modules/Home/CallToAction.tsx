import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import GradientTitle from "@/components/ui/gradientTitle";
import Link from "next/link";

const CallToAction = () => {
  return (
    <Container bg="bg-slate-900" className="text-center py-16">
      <GradientTitle
        title="Ready to Start Your Investment Journey?"
        description="Join us today and take the first step towards smart investments and
          successful startup growth."
      />
      <Link href="/invest">
        <Button size="lg" className="mt-6 rounded-full">
          Get Started
        </Button>
      </Link>
    </Container>
  );
};

export default CallToAction;
