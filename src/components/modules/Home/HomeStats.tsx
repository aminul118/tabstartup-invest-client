import Container from "@/components/ui/container";

const HomeStats = () => {
  return (
    <Container bg="bg-slate-900" className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto w-full py-12 px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Empowering Ideas, Fueling Dreams
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-foreground/70">
          Join thousands of backers supporting innovative projects that make a
          real impact. Together, we’re building a future powered by creativity,
          community, and collaboration.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <span className="text-5xl md:text-6xl font-bold text-indigo-500">
              $12M+
            </span>
            <p className="mt-6 font-semibold text-xl">Funds Raised</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Raised across thousands of projects from backers worldwide.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-rose-500">
              120+
            </span>
            <p className="mt-6 font-semibold text-xl">Projects Launched</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Innovative campaigns from creators in every industry.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-emerald-500">
              20k+
            </span>
            <p className="mt-6 font-semibold text-xl">Active Backers</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              A global community of supporters bringing ideas to life.
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-blue-500">
              95%
            </span>
            <p className="mt-6 font-semibold text-xl">Success Rate</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Most projects reach or exceed their funding goals.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeStats;
