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
      <div className="education-box">
        <div className="education-box-line">
        </div>
        <div className="education-box-content">
            <div className="education-box-content-child">
                <h2>The LNM Institute of Information Technology, Jaipur</h2>
                <p className="education-box-content-para">
                    I am currently pursuing B.tech in computer science and engineering.<br></br>
                    CGPA : <strong>8.29</strong><br></br>
                    August 2020 - May 2024
                </p>
            </div>
            <div className="education-box-content-child">
                <h2>Seth Anandram Jaipuria School, Ghaziabad</h2>
                <p className="education-box-content-para">
                    I completed my 12th standard from CBSE board. My subjects were Physics, Chemistry and Maths<br></br>
                    Result : <strong>95.4%</strong> <br></br>
                    2019 - 2020
                </p>
            </div>
            <div className="education-box-content-child">
                <h2>DAV Public School, Shreshtha Vihar</h2>
                <p className="education-box-content-para">
                    I completed by 10th standard from CBSE board.<br></br>
                    Result : <strong>92.4%</strong> <br></br>
                    2017 - 2018
                </p>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
