/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk-new.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Developing Telegram Bot Using Python In Just a Few Steps",
    description:
    "Build Telegram bots in a very simple way",
    url: "https://medium.com/@ganapathi-d/developing-telegram-bot-using-python-in-just-a-few-steps-40137f97b6f4",
  },
  {
    title: "Best 5 No Code Website Builder Tools | 100% Free to build",
    description:
      "I listed out the recent 5 best No Code website builder tools",
    url: "https://youtu.be/1DhL31v7wDU?si=P38YR_xsfM03z2PY",
  },
  {
    title: "Java App Titorial",
    description:
      "Developing JAVA Applications and Deploying (Part - 1)",
    url: "https://youtu.be/DzQ8NdC8y10?si=YnxPmsc9BHgctUHX",
  },
  {
    title: "My Portfolio - II",
    description:
      "My First Portofolio website build with Next JS",
    url: "https://ganapathi-portfolio.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
