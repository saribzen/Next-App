import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-row gap-14 px-20 bg-slate-800">
        <div className=" flex flex-col justify-start items-start py-9">
          <Label className=" px-4 font-bold py-3 text-gray-400">PAGES</Label>

          <Button variant="link">
            <Link className=" text-white" href={"/auth/login"}>
              Login
            </Link>
          </Button>

          <Button variant="link">
            <Link className=" text-white" href={"/contact"}>
              Contact us
            </Link>
          </Button>

          <Button variant="link">
            <Link className=" text-white" href={"/about"}>
              About
            </Link>
          </Button>
        </div>

        <div className=" flex flex-col justify-start items-start py-9">
          <Label className=" px-4 font-bold py-3 text-gray-400">COURSES</Label>

          <Button variant="link">
            <Link className=" text-white" href={"/auth/login"}>
              Data Science
            </Link>
          </Button>

          <Button variant="link">
            <Link className=" text-white" href={"/contact"}>
              Web Development
            </Link>
          </Button>

          <Button variant="link">
            <Link className=" text-white" href={"/about"}>
              Mobile Development
            </Link>
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
