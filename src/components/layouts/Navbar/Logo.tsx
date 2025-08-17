import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.png" width={160} height={40} alt="Logo" />
    </div>
  );
};

export default Logo;
