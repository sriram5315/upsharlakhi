"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { IconLink, LinkType } from "@/types/universalTypes";

const Navbar = ({navItems}: {navItems: LinkType[]}) => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const icons: IconLink[] = [
    { icon: Phone, href: "tel:+1234567890" },
    { icon: MessageCircle, href: "https://wa.me/1234567890", isExternal: true },
    {
      icon: Facebook,
      href: "https://facebook.com/universalpublicschool",
      isExternal: true,
    },
    {
      icon: Instagram,
      href: "https://instagram.com/universalpublicschool",
      isExternal: true,
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-full bg-nav box-shadow z-[999]"
        >
        <nav className="padding-x-section section-width flex items-center justify-between py-[2px]">
          <Link href={"/"}>
            <Image
              src="/universal-public-school-logo.png"
              alt="Universal Public School"
              width={80}
              height={80}
            />
          </Link>
          <div className="flex items-center gap-2 md:gap-8">
            <ul className="hidden md:flex md:gap-6">
              {navItems.map((navItem) => (
                <li
                  key={navItem.href}
                  className={`transition-colors duration-300 ease-out ${pathname === navItem.href ? "font-semibold text-blue-700" : "text-gray-800 hover:text-gray-600"}`}
                >
                  <Link href={navItem.href}>{navItem.text}</Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 md:gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="hover:bg-inherit/80 border-none bg-inherit shadow-none ease-out hover:scale-[120%]"
                    variant="outline"
                    size="icon"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-blue-700 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-blue-700 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="mt-[25px] bg-nav text-black"
                  align="end"
                >
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href={'/'}>
                  <Button className="hidden md:inline-block w-full px-4 py-2 text-white font-semibold rounded-full shadow-sm shadow-primary/80">
                    Visit App
                  </Button>
              </Link>
              <Menu
                className="inline-block h-[30px] w-[30px] cursor-pointer text-primary md:hidden"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </nav>
    </motion.header>
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black md:hidden"
              onClick={toggleSidebar}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="fixed left-0 top-0 z-[1001] h-full w-64 bg-nav shadow-lg md:hidden py-6"
            >
              <div className="flex h-full flex-col justify-between px-4">
                <div className="">

                    <div className="mb-8 flex items-center justify-between">
                        <Image
                            src="/universal-public-school-logo.png"
                            alt="Universal Public School"
                            width={100}
                            height={100}
                        />
                        <X
                            className="h-6 w-6 cursor-pointer text-primary"
                            onClick={toggleSidebar}
                        />
                    </div>

                    {/* Navigation Items */}
                    <ul className="space-y-4">
                    {navItems.map((navItem) => (
                        <li
                        key={navItem.href}
                        className={`transition-colors duration-300 ease-out ${pathname === navItem.href ? "rounded-lg p-2 font-semibold text-primary" : "p-2 text-gray-800"}`}
                        >
                        <Link href={navItem.href} onClick={toggleSidebar}>
                            {navItem.text}
                        </Link>
                        </li>
                    ))}
                    <li className="pt-4">
                        <Link 
                            href={'/'}
                            onClick={toggleSidebar}
                        >
                            <Button className="w-full px-4 py-2 text-white font-semibold rounded-full">
                                App
                            </Button>
                        </Link>
                    </li>
                    </ul>
                </div>

                {/* Icons Section (Bottom of Sidebar) */}
                <div className="">
                  <div className="flex justify-center gap-6">
                    {icons.map(({ icon: Icon, href, isExternal }) => (
                      <a
                        key={href}
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="transition-colors text-primary"
                      >
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
