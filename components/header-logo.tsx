import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2 group">
      <div className="items-center hidden lg:flex">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={36}
          height={36}
          className="transition-transform group-hover:scale-110"
        />
        <p className="font-bold text-white text-3xl ml-3 tracking-tight drop-shadow">
          Paywall
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
