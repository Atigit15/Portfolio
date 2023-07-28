import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="achievements"
      id="achievements"
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
        <h2>Achievements and Certifications</h2>
        <br></br>
        <br></br>
      </div>
      <div className="achievements-content">
        <div className="achievements-content-child">
          <div className="image">
            <Image src={"/google-logo.png"} width={100} height={80} alt={"image"} quality={100}></Image>
          </div>
          <div className="text">
            <h3>Google Kickstart</h3>
            <p>Secured Global Rank 545 out of 12k+ participants in Google Kickstart Round E 2022.</p>
          </div>
        </div>
        <div className="achievements-content-child">
          <div className="image">
            <Image src={"/cn-logo.png"} width={80} height={80} alt={"image"} quality={100}></Image>
          </div>
          <div className="text">
            <h3>IICC - Coding Ninjas</h3>
            <p>Secured All India Rank 137 out of 89k+ participants in IICC Conducted by Coding Ninjas.</p>
          </div>
        </div>
        <div className="achievements-content-child">
          <div className="image">
            <Image src={"/lc-logo.png"} width={80} height={80} alt={"image"} quality={100} ></Image>
          </div>
          <div className="text">
            <h3>Knight at Leetcode</h3>
            <p> Maximum Rating of 1979 (Top 3%)</p>
            <p> Secured Global Rank 838 out of 24k+ participants in Leetcode Weekly Contest 354.</p>
            {/* <p>Solved over 600 questions. Rating of 1868 (Top 0.53%)</p> */}
          </div>
        </div>
        <div className="achievements-content-child">
          <div className="image">
            <Image src={"/codechef-logo.png"} width={80} height={80} alt={"image"} quality={100}></Image>
          </div>
          <div className="text">
            <h3>Codechef Starters 14</h3>
            <p>Secured Global Rank 420 out of 9k participants in Codechef Starters 14.</p>
          </div>
        </div>
        <div className="achievements-content-child">
          <div className="image">
            &nbsp;&nbsp;&nbsp;
            <Image src={"/codeforces-logo.png"} width={60} height={80} alt={"image"} quality={100}></Image>
          </div>
          <div className="text">
            <h3>Codeforces</h3>
            <p>Highest Rating 1492 - Specialist.</p>
            <p>Secured Global Rank 736 out of 17k+ participants in Codeforces Round 883 (Div-3).</p>
          </div>
        </div>
        <div className="achievements-content-child">
          <div className="image">
            <Image src={"/udemy-logo.png"} width={80} height={80} alt={"image"} quality={100}></Image>
          </div>
          <div className="text">
            <h3>Web Developement Bootcamp</h3>
            <p>Completed the udemy course by Angela Yu</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Achievements;
