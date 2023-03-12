import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between bg-white py-5 sticky top-0 items-center">
      {/* logo */}
      <div>
        {/* <h2 className="text-xl font-bold">panaverse dao</h2> */}
        <Image src={logo} alt="Panaverse Dao logo" />
      </div>
      {/* navigation bar */}
      <ul className="flex space-x-8 font-semibold">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/Courses"}>Courses</Link>
        </li>
      </ul>
    </header>
    </Wrapper>
  );
};

export default Header;
