import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="education"
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Education</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
            <p className="about-grid-info-text">
                The LNM Institue of Information Technology
            </p>
        </div>
        <div className="about-grid-info">
            <p className="about-grid-info-text">
                The LNM Institue of Information Technology
            </p>
        </div>
        <div className="about-grid-info">
            <p className="about-grid-info-text">
                The LNM Institue of Information Technology
            </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
