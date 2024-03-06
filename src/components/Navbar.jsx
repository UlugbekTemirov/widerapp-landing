import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "./Container";
import Logo from "./Logo";
import Sidemenu from "./Sidemenu";

const links = [
  {
    href: "#howWork",
    label: "How does it work?",
  },
  {
    href: "#ourUsers",
    label: "Our Users",
  },
  {
    href: "#assesntements",
    label: "Assesntements",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidemenu links={links} open={open} onClose={() => setOpen(false)} />

      <nav className="py-5 bg-[white] fixed z-30 w-full">
        <Container center className="justify-between items-center">
          <div className="flex items-center  gap-5">
            <RxHamburgerMenu
              onClick={() => setOpen(true)}
              className="md:hidden"
              size={28}
            />
            <Logo />
          </div>

          <ul className="md:flex items-center gap-10 hidden">
            {links.map(({ href, label, children }, index) => (
              <li
                key={index}
                className="cursor-pointer text-[#444a4f] font-normal text-[16px] navlink"
              >
                <a className="flex items-center" href={href}>
                  {label}
                  {children ? <RiArrowDropDownLine size={25} /> : null}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:block hidden">
            <span className="font-bicub text-[16px]">+998 97 628 28 82</span>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
