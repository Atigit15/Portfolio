import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project4.png",
      projectName: "Quirk Chat",
      projectLink: "https://quirk-chat.netlify.app",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Atigit15/Quirk-Chat",
        externalLink: "https://quirk-chat.netlify.app",
      },
    },
    {
      image: "/project5.png",
      projectName: "SneakerLand Landing Page",
      projectLink: "https://atigit15.github.io/SneakerLand-LandingPage/",
      projectDescription:
        "Welcome to Sneakerland, a landing page for sneaker enthusiasts. This project is completely responsive and is built using HTML, SCSS, and JavaScript. It provides a visually appealing and user-friendly interface to showcase different sneaker models.",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Atigit15/SneakerLand-LandingPage",
        externalLink: "https://atigit15.github.io/SneakerLand-LandingPage/",
      },
    },
    {
      image: "/project6.png",
      projectName: "Meme-ory Game",
      projectLink: "https://meme-ory-game.netlify.app/",
      projectDescription:
        "Welcome to the React Memes Memory Game, a delightful variation of the classic memory game that combines brain-teasing fun with popular internet memes!.",
      projectTech: [
        "React",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/Atigit15/Meme-ory_Game",
        externalLink: "https://meme-ory-game.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Projects</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  {/* <div className="project-image-overlay"></div> */}
                  <div className="project-image-border"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
