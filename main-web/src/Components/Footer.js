import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  return (
    <div className="bg-blue-800 max-w-full mx-auto py-16 px-8 grid lg:grid-cols-3 gap-8 text-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">CORSIT</h1>
        <p className="py-4 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <ExternalLink href="https://www.facebook.com/thecorsit/">
            <FaFacebookSquare size={30} />
          </ExternalLink>

          <ExternalLink href="https://www.linkedin.com/company/corsit/mycompany/">
            <FaInstagram size={30} />
          </ExternalLink>

          <ExternalLink href="https://www.linkedin.com/company/corsit/mycompany/">
            <FaLinkedinIn size={30} />
          </ExternalLink>

          <ExternalLink href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w">
            <FaYoutube size={30} />
          </ExternalLink>
        </div>
      </div>
      <div className="lg:col-span-2 font-bold flex justify-around mt-6">
        <div>
          <h6 className="font-medium text-black">EVENTS</h6>
          <ul>
            <li className="py-2 text-sm">RoboExpo</li>
            <li className="py-2 text-sm">Paid WorkShop</li>
            <li className="py-2 text-sm">Free Workshop</li>
            <li className="py-2 text-sm">Robocor</li>
          </ul>
        </div>
        <div>
          <h6 className="ml-8 font-medium text-black">NEED HELP ?</h6>

          <ul>
            <div className="flex justify-center ">
              <SlLocationPin className="mt-6 mr-1" size={30} />
              <li className="py-2 text-sm">
                Corsit Lab
                <p>
                  Siddaganga Institute of Technology
                  <br /> Tumkur, Karnataka
                </p>
              </li>
            </div>
            <div className="flex my-1">
              <FaWhatsapp className="mr-1" size={30} />
              <li className=" py-1 text-sm">Contact us on WhatsApp</li>
            </div>
            <div className="my-3 flex  ">
              <MdAlternateEmail className="mr-1" size={30} />
              <li className="py-1 text-sm">Contact us on Gmail</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
