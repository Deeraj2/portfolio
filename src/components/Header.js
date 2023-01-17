import React from "react";
import Typewriter from "typewriter-effect";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const Header = ({ toggle, setToggle }) => {
  return (
    <>
      <div className="toggle">
        {toggle ? (
          <NightlightRoundIcon
            sx={{ color: "#0D1117", cursor: "pointer", fontSize: "30px" }}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <WbSunnyIcon
            sx={{ color: "#FDB813", cursor: "pointer", fontSize: "30px" }}
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>
      <header className="intro" initial="hidden" animate="show">
        <h1 className="intro-hello">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 10,
              strings: ["Hello!", "Namaste!", "Haalo!", "Olá!", "Kon'nichiwa!"],
            }}
          />
        </h1>
        <h2 className="intro-tagline">
          I'm <span className="name">Deeraj Rajesh</span>, a web developer based
          in Mumbai, India. I love building beautiful interfaces, web apps, and
          everything in between!
        </h2>
        <h3 className="intro-contact">
          <span>Get in touch 👉🏼</span>{" "}
          <span>
            <a
              href="mailto:deerajrajesh22@gmail.com"
              className="highlight-link"
            >
              deerajrajesh22@gmail.com
            </a>
          </span>
        </h3>
      </header>
    </>
  );
};

export default Header;
