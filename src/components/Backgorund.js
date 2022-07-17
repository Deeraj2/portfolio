import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          I recently graduated from{" "}
          <a
            href="http://www.unipune.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            Pillai College of Arts, Commerce and Science
          </a>{" "}
          after completing Bachelor of Science in Computer Science
        </p>
        <p>
          I'm Jr. Front-End Developer specializing in design and integration.
          I'm focused on building projects with javascript especially on ReactJS.
          You can find me on <a href="https://github.com/Deeraj2" className='underline-link'>Github</a> and <a href="https://www.linkedin.com/in/deeraj-rajesh-a62579222/" className='underline-link'>LinkedIn</a>
        </p>
        <p>
          <strong>When I'm not in front of a computer screen</strong>, I'm
          probably reading books, travelling, photography or playing video games.
        </p>
        <a
          className="arrow-link"
          href="https://drive.google.com/file/d/1Zcg-bYiATOd2ZfcTY5lK3EsG-i5y-IEP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </section>
  );
};

export default Background;