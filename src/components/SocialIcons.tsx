import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import {BsMedium} from "react-icons/bs";

import { SiLeetcode, SiLinktree } from 'react-icons/si'
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com/Atigit15" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/atishay-jain-b00586192",
    },
    {
      name: "Medium",
      icon: <BsMedium />,
      link: "https://medium.com/@atishayjn999",
    },
    {
      name: "Leetcode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/Atishayjn15/",
    },
    {
      name: "LinkTree",
      icon: <SiLinktree />,
      link: "https://linktr.ee/atishay_jain",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/Atishay70433479",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
