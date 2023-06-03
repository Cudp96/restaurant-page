import React from "react";

import NewsLetter from "./Newsletter";
import Copyright from "./Copyright";
import Socials from "./Socials";

import { footerData } from "../data";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../variants";

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-80 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          className="h-full flex flex-col gap-y-12"
        >
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <NewsLetter />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            <div className="flex-1 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px] text-center">
                {contact.title}
              </div>
              <div className="capitalize">{contact.address}</div>
              <div className="capitalize">{contact.phone}</div>
            </div>
            <div className="flex-1  ">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex gap-x-[46px]">
                {hours.program.map((item, i) => {
                  return (
                    <div className="capitalize" key={i}>
                      <div>{item.days}</div>
                      <div className="text-[20px] text-accent">
                        {item.hours}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 lg:max-w-[280px] md:mb-12">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]">
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>

          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
