import React from "react";
import ProjectData from "./ProjectData";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <ProjectData
            title="Crypto"
            link="https://github.com/Deeraj2/Crypto-app"
            desc="A web app to help you see the market-price of the coin where you can also add your favorite
                  coin in the watchlist."
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "Material-ui",
              "Material-icons",
              "Firebase",
              "coingecko-api",
            ]}
          />
          <ProjectData
            title="Secrets"
            link="https://github.com/Deeraj2/Secrets"
            desc="A web app gives you a quick and simple notepad editing experience when you write notes, emails, messages, and shopping lists."
            usedArray={[
              "JavaScript",
              "MERN",
              "React Router",
              "Material-ui",
              "Material-icons",
              "bcryptjs",
              "cors",
              "axios",
            ]}
          />
          <ProjectData
            title="Tweko"
            link="https://github.com/Deeraj2/tweko"
            desc="Tweko is a blogging app where users can upload, like, save, download and comment on their blogs."
            usedArray={[
              "JavaScript",
              "ReactJs",
              "NodeJs",
              "ExpressJs",
              "Material-icons",
              "MySQL",
              "bcryptjs",
              "cors",
              "axios",
              "Sequelize",
              "Masonry",
              "jwt-decode",
            ]}
          />
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/Deeraj2"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Check my other projects on github.</h4>
        </a>
      </div>
    </>
  );
};

export default Projects;
