"use client";

import Image from "next/image";
import { NavigationMenuNav } from "./navigation";
import { Button } from "./button";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="container mx-auto w-full">
      <div
        className={`w-full fixed top-0 z-10 p-6 transition-colors duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image
              src="/assets/images/logo/logo.svg"
              alt="logo"
              width={128}
              height={28}
            />
            <NavigationMenuNav />
          </div>
          <div className="flex items-center gap-4">
            <Button className="text-white" variant="ghost">
              <Globe />
              EN
            </Button>
            <Button className="text-white" variant="ghost">
              Sign in
            </Button>
            <Button className="bg-[#00CAE0] text-black hover:bg-[#00CAE0]/90">
              Create now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
