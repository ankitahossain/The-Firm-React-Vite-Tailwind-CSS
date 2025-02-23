import React from "react";
import logo from "../assets/logo.png";

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const footerItem = [
  { id: 1, name: "Home" },
  { id: 2, name: "Solutions" },
  { id: 3, name: "Cases" },
  { id: 4, name: "About us" },
  { id: 5, name: "Contact us" },
];

const socialICONS = [
  { id: 1, icon: <FaFacebookF /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaYoutube /> },
  { id: 4, icon: <FaLinkedinIn /> },
  { id: 5, icon: <FaPinterestP /> },
];

const Footer = () => {
  return (
    <div className="bg-white p-10">
      <div className="container mx-auto text-center">
        <picture>
          <img src={logo} alt="logo" className="mx-auto mb-4" />
        </picture>

        <ul className="flex justify-center space-x-6 mb-4">
          {footerItem.map((data) => (
            <li key={data.id}>
              <a href="#" className="font-nunito font-extrabold text-[#A5A5A5] text-[20px] hover:text-black">
                {data.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center space-x-4 mb-4">
          {socialICONS.map((data) => (
            <li key={data.id}>
              <a href="#" className="text-[25px] text-[#A5A5A5] hover:text-yellow-500">
                {data.icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[18px] font-nunito font-normal leading-[134%] text-[#A5A5A5]">
          Copyrights ©2020 Thefirm. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
