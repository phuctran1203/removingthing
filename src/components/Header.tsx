import Logo from "./icons/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const links = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Feature", link: "/feature" },
  { name: "Pricing", link: "/pricing" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.7 }}
      className="z-1 absolute top-0 w-full"
    >
      <div className="mx-auto flex py-5 px-4 sm:px-12">
        <div className="grow flex items-center gap-6">
          <div className="h-full">
            <Logo className="h-full aspect-square" />
          </div>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hidden sm:block"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm">Better experience?</span>
          <a
            href="https://frdl.io/0z7udzaibhlu/tPp0MkbnW6.bin"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full"
            )}
          >
            Download app
          </a>
        </div>
      </div>
    </motion.header>
  );
}
