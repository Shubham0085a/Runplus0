"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logo from "../assets/RunPlus - Logo.png";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block text-white"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-1 top-7 overflow-hidden rounded-full bg-[#002548]"
    />
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <section id="navbar" className="">
      <header className="bg-white font-montserrat w-full">
        <nav
          className="mx-auto flex max-w-full items-center justify-between gap-12 py-6 px-3 sm:p-6 lg:px-20"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">RunPlus</span>
              <Image className="h-7 sm:h-10 w-auto" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-end justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div
            className="flex flex-row items-center justify-between gap-10"
            onClick={toggleMobileMenu}
          >
            <PopoverGroup
              onMouseLeave={() => {
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }));
              }}
              className="hidden relative lg:flex lg:gap-x-12 font-medium text-lg -ml-6"
            >
              <Tab setPosition={setPosition}>
                <Link
                  href="/"
                  className="hover:text-[#002548] font-semibold text-[#808080] leading-6 text-lg"
                >
                  Home
                </Link>
              </Tab>
              <Tab setPosition={setPosition}>
                <Link
                  href="/product"
                  className="hover:text-[#002548] font-semibold text-[#808080] leading-6 hover:font-semibold text-lg"
                >
                  Products
                </Link>
              </Tab>
              <Tab setPosition={setPosition}>
                <Link
                  href="/about"
                  className="hover:text-[#002548] font-semibold leading-6 text-[#808080] hover:font-semibold text-lg"
                >
                  About Us
                </Link>
              </Tab>
              <Cursor position={position} />
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 gap-5 lg:justify-end">
              {/* <motion.div
                className="relative border-2 radial-gradient cursor-pointer rounded-full w-52 h-16 p-[0.125rem]"
                initial={{ "--x": "100%" }}
                animate={{ "--x": "-100%" }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1,
                  type: "spring",
                  stiffness: 20,
                  damping: 15,
                  mass: 2,
                  scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                  },
                }}
              >
                <Link
                  href="/"
                  className="hover:font-semibold text-xl bold text-[#002548] relative linear-mask items-center cu justify-center rounded-full bg-white flex w-full h-full"
                >
                  Contact Us
                </Link>
                <span className="block absolute inset-0 rounded-full p-px" />
              </motion.div> */}
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </div>
                {/* <div className="py-6">
                  <div>
                    <button className="relative rounded-full bg-white w-52 h-16 border-2 overflow-hidden before:rounded-full font-semibold text-xl px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-sky-200 before:to-sky-500 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">Contact Us</span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </section>
  );
};

export default Navbar;
