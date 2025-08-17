"use client";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  Facebook,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "../Navbar/Logo";
import { navigationLinks } from "../Navbar/navigationMenuLink";

const Footer = () => {
  return (
    <div className=" flex flex-col bg-slate-900 mt-12 lg:mt-14">
      <div className="grow " />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <Logo />

            <ul className="mt-6 flex flex-col lg:flex-row items-center gap-4 flex-wrap">
              {navigationLinks.map((menu) => (
                <Link key={menu.label} href={menu.href}>
                  {menu.label}
                </Link>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0 text-center">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                TabStartup Invest
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
