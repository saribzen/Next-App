import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between relative z-30 py-5 px-5 border-b-2 shadow-md">
      <Link href={"/"}>
        <h1 className="font-bold text-xl">CMS.</h1>
      </Link>

      <ul className="gap-10 hidden h-full lg:flex">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className=" text-gray-700 flex justify-between transition-all cursor-pointer py-2 hover:font-bold"
          >
            {item.label}
          </Link>
        ))}

        <Link href={"/auth/login"} className="hidden lg:flex">
          <Button className="rounded-full">Login</Button>
        </Link>
      </ul>

      <h1 className="inline-block cursor-pointer lg:hidden">{">"}</h1>
    </nav>
  );
};

export default Navbar;
