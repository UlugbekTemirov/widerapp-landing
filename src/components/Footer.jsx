import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Container from "./Container";
import { FaInstagram, FaTelegram, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  const socials = [
    {
      id: "instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/widerai/",
    },
    {
      id: "telegram",
      icon: FaTelegram,
      link: "https://t.me/widerai",
    },
    {
      id: "youtube",
      icon: FaYoutube,
      link: "https://www.youtube.com/channel/UCQXQ3QZHoA0ZJ7j7X6ZQ4jQ",
    },
    {
      id: "twitter",
      icon: FaTwitter,
      link: "https://twitter.com/widerai",
    },
  ];

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
      href: "#privacy",
      label: "Privacy and Police",
    },
    {
      href: "#contacts",
      label: "Contacts",
    },
    {
      href: "#pricing",
      label: "Pricing",
    },
  ];

  return (
    <section
      id="footer"
      className="bg-[#F4F7F9] flex items-center lg:py-[60px] py-[30px]"
    >
      <Container className="max-w-[1220px] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center  xl:justify-between gap-x-[20px] lg:gap-x-[72px] mb-[26px] gap-y-[10px]">
          <div className="flex items-center justify-center ">
            <Logo />
          </div>
          <ul className="flex flex-wrap justify-center items-center gap-x-[28px]">
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
          <div className="flex  items-center justify-center gap-5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#667085] hover:text-[#7F56D9] duration-200 border-[#252b31] border rounded-full p-2"
                >
                  <Icon className="w-[24px] h-[24px] text-[#252b31]" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="text-[14px] text-[#475467] leading-[140%] font-normal text-center">
          Lorem ipsum.com Hamma huqular himoyalangan
        </p>
      </Container>
    </section>
  );
};

export default Footer;
