import MobileMenu from "./mobile";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-999 flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-12 w-12"
        />

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
