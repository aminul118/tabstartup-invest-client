import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { ArrowUpRight, Search, HandCoins } from "lucide-react";

export default function Investment() {
  const features = [
    {
      icon: <ArrowUpRight className="h-10 w-10 text-primary" />,
      title: "Maximized Returns",
      description:
        "Don’t let your idle money depreciate over time. Grow your money with us and beat inflation!",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Visible Transparency",
      description:
        "Check and review every detail of our campaigns. Nothing will be hidden from you.",
    },
    {
      icon: <HandCoins className="h-10 w-10 text-primary" />,
      title: "Invest Effortlessly",
      description:
        "You just need to choose which campaign to invest in. We’ll handle the rest.",
    },
  ];

  return (
    <Container>
      {/* Header */}
      <h2 className="text-2xl md:text-5xl font-semibold  mb-4 text-center max-w-2xl mx-auto">
        Investing through{" "}
        <span className="text-purple-500 font-bold">
          investors network Bangladesh
        </span>{" "}
        is simple, powerful, and{" "}
        <span className="text-blue-500 underline decoration-wavy">trusted</span>
      </h2>

      {/* Features */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <Card
            data-aos="fade-up"
            key={i}
            className="rounded-2xl  p-6 shadow-sm border hover:shadow-md transition mt-12"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold ">{feature.title}</h3>
            <p className="mt-2 text-sm ">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
