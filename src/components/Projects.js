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
              "coingecko-api"
            ]}
          />
          <ProjectData
            title="BingeHub"
            link="https://github.com/Deeraj2/Bingehub"
            desc="A web app where you can watch the ratings,seasons,overviews of the movie, tv-series and documentaries."
            usedArray={[
              "JavaScript",
              "React",
              "Firebase",
              "React Router",
              "Material-ui",
              "Material-icons",
              "TMDB API"
            ]}
          />
          <ProjectData
            title="ShareMe"
            link="https://github.com/Deeraj2/ShareMe"
            desc="A full stack blog website where you can create pins, save pins and delete pins."
            usedArray={[
              "JavaScript",
              "React",
              "Sanity",
              "Material-icons",
              "Tailwind-css",
              "uuid",
              "Masonry",
              "jwt-decode"
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