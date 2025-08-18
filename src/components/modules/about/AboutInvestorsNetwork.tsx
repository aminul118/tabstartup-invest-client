"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";

const AboutInvestorsNetwork = () => {
  return (
    <Container>
      {/* About Section */}
      <Card className="rounded-2xl shadow-lg border">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            About{" "}
            <span className="text-blue-600">Investors Network Bangladesh</span>
          </CardTitle>
        </CardHeader>
        <CardContent className=" text-center text-lg space-y-4">
          <p>
            We are a team that genuinely wants the reformation of Bangladesh,
            and we believe the SMEs & MSMEs will play a vital part in the second
            emergence of this limitless land!
          </p>
          <p>
            Our mission is to revolutionise this underrated space by helping
            businesses grow, sustain, and empower others in the journey of
            entrepreneurship!
          </p>
        </CardContent>
      </Card>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="rounded-2xl shadow-md border">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Mission</CardTitle>
          </CardHeader>
          <CardContent className="">
            Empowering dreams by connecting passionate entrepreneurs with
            supportive communities through transparent and impactful
            crowdfunding.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Vision</CardTitle>
          </CardHeader>
          <CardContent className="">
            To finance over <span className="font-semibold">80 crore BDT</span>{" "}
            to more than{" "}
            <span className="font-semibold">
              150 carefully selected SMEs & Startups
            </span>
            before the end of <span className="font-semibold">2030</span>,
            accelerating business transformation in Bangladesh.
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default AboutInvestorsNetwork;
