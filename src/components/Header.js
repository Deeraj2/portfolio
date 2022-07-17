import React from "react";

const Header = () => {
    


  return (
    <header className="intro" 
    initial="hidden"
    animate="show">
    
      <h1 className="intro-hello" >
        &lt; Hello!! /&gt;
      </h1>
      <h2 className="intro-tagline" >
        I'm <span className="name">Deeraj Rajesh</span>, a web developer based
        in Mumbai, India. I love building beautiful interfaces, web apps, and
        everything in between!
      </h2>
      <h3 className="intro-contact" >
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
  );
};

export default Header;