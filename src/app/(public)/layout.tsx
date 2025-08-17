import Footer from "@/components/layouts/Footer/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import { IChildren } from "@/types";

const PublicLayout = ({ children }: IChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
