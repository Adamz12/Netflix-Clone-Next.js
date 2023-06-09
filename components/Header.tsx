import useAuth from "@/useHooks/useAuth";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasicMenu from "./BasicMenu";
import NetlixLogo from "../assets/Netflix_2015.png";
import NetflixAvatar from "../assets/Netflix-avatar.png";

function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex space-x-2 md:space-x-10">
        <Image
          src={NetlixLogo}
          width={100}
          height={100}
          alt=""
          className="cursor-pointer object-contain"
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline-block" />
        <p className="hidden lg:inline-block">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <Image
            src={NetflixAvatar}
            width={35}
            height={35}
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
