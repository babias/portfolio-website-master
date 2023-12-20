"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

      <SectionHeading>About me</SectionHeading>
      <p className="mb-7">
        Commited professional with a diverse background, with 10+ years of experience in <span className="font-medium">reporting, 
        coding and data analytics,</span> and 5+ years of experience in the <span className="font-medium">banking industry 
        </span> concentrated in <span className="font-medium">fraud, credit card, systems support, and electronic
        payments.</span> Driven by my passion for technology, I pursued further expertise through a coding bootcamp, 
        focusing on<span className="font-medium"> full-stack web development</span>. The gratification of uncovering solutions, 
        coupled with the exposure to new technologies and challenges, makes the journey itself as rewarding as the outcomes achieved.
      </p>

      <p className="mb-7">
        Outside of work, I enjoy spending time with my family, exploring new destinations through travel. Teaching scuba diving classes 
        as a NAUI Instructor and restoring old arcade games and jukeboxes are my two primary hobbies.
      </p>

      <p className="font-bold">
        <span className="italic bold">Let's connect and see how 
        my skills can benefit your team!</span>
      </p>
    </motion.section>
  );
}
