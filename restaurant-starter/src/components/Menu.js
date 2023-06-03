import React from "react";

import { menuData } from "../data";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../variants";

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <section className="min-h-[780px] ">
      <div className="h-[780px] bg-menu absolute w-full max-w-[1800px] "></div>
      {/* Text */}
      <div className="relative z-10 top-72 lg:top-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn("down", "tween", 0.2, 1.6)}
            className="h2 capitalize text-white max-w-[400px]"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.6)}
            className="text-white/70 capitalize mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.6, 1.5)}>
            <img src={modelImg} alt="modeImg" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1.6,
          ease: "easeOut",
        }}
        className="relative top-[20rem] lg:top-36"
      >
        <div className="container mx-auto">
          <div className="lg:mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[590px]">
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="flex flex-row lg:flex-col h-full">
                      <div
                        className={`w-[45%] md:w-auto ${
                          index === 1 || index === 3
                            ? "lg:order-1"
                            : "order-none"
                        }`}
                      >
                        <img src={image} alt={name} />
                      </div>
                      {/* Text */}
                      <div className="bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max">
                        <div>
                          <div>{name}</div>
                          <div>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mx-auto capitalize">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
