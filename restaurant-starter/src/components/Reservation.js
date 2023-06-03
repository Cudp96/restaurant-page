import React, { useState, useEffect } from "react";

import { reservationData } from "../data";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import TimePicker from "react-time-picker";
import "../timepicker.css";

import { FaUsers, FaCalendar, FaClock } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = useState("10:00");
  return (
    <section className="relative top-72 z-30 pb-20 lg:py-[100px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            initial="hidden"
            whileInView="show"
            className="h2 capitalize text-center"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            initial="hidden"
            whileInView="show"
            className="mb-4 text-dark text-center"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            initial="hidden"
            whileInView="show"
            className="flex justify-center items-center mb-6"
          >
            <img src={modelImg} alt={title} />
          </motion.div>
        </motion.div>
        <motion.form
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 mb-6">
            <div className="flex flex-col items-center justify-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaCalendar />
              <div>Choose Date</div>
              <DatePicker
                className="input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div>
              {" "}
              <div className="flex items-center justify-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                className="input"
                clearIcons={false}
                clockIcon={false}
                onChange={setValue}
                value={value}
              />
            </div>
            <div>
              {" "}
              <div className="flex items-center justify-center gap-x-[10px] font-semibold text-dark text-base mb-3">
                <FaClock />
                <div>How many people?</div>
              </div>
              <input type="text" placeholder="1" className="input" />
            </div>
          </div>
          <div className="max-w-[316px] mx-auto flex justify-center">
            <button className="btn capitalize w-full lg:w-auto">
              {btnText}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
