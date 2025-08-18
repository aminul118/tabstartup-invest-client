import { Card, CardContent } from "@/components/ui/card";
import GradientTitle from "@/components/ui/gradientTitle";
import { Lightbulb, Heart, FileText, Puzzle, Network } from "lucide-react"; // ✅ using icons

const values = [
  {
    title: "Proactiveness",
    icon: Lightbulb,
  },
  {
    title: "Compassion",
    icon: Heart,
  },
  {
    title: "Transparency",
    icon: FileText,
  },
  {
    title: "Integrity",
    icon: Puzzle,
  },
  {
    title: "Empowerment",
    icon: Network,
  },
];

const ValuesSection = () => {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <GradientTitle title="Our Fearless Values" />

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => (
            <Card
              key={idx}
              className="rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <CardContent className="flex flex-col items-center justify-center text-center py-8">
                <value.icon className="h-18 w-18 mb-4 " />
                <GradientTitle description={value.title} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
