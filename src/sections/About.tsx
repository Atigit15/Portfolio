import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Atishay, and I am passionate about creating
            digital content for the web. 
          </p>
          <p className="about-grid-info-text">
            I specialize in the MERN stack and have successfully crafted several projects.
          </p>

          <p className="about-grid-info-text">
            Alongside my expertise in building dynamic web applications, I possess a solid foundation in data structures and algorithms.
          </p>
          <p className="about-grid-info-text">
          Additionally, my curiosity extends to exploring cloud and devOps technologies, further enhancing my skills in the ever-evolving tech landscape.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <br></br>
          {/* <br></br> */}
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Git/Github</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          {/* <div className="overlay"></div> */}
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/atishay3.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
