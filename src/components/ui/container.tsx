import { IChildren } from "@/types";
import { cn } from "@/lib/utils";

interface ContainerProps extends IChildren {
  className?: string;
  bg?: string;
}

const Container = ({ className, children, bg }: ContainerProps) => {
  return (
    <section className={cn(bg)}>
      <div
        className={cn(
          "container mx-auto px-4 md:px-6 lg:px-8 py-24",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
