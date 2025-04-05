import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          I graduated from{" "}
          <a
            href="https://pcacs.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            Pillai College of Arts, Commerce and Science
          </a>{" "}
          in 2022 with a Bachelor of Science in Computer Science.
        </p>
        <p>
          I'm a Full Stack Web Developer (MERN) with hands-on experience in
          building responsive web apps, CRM solutions, and chatbots. I’ve also
          worked on executing WhatsApp campaigns and crafting dynamic HTML and
          AMP emailers to boost business performance. You can find me on
          <a href="https://github.com/Deeraj2" className="underline-link">
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/deeraj-rajesh-a62579222/"
            className="underline-link"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <strong>When I'm not in front of a computer screen</strong>, I love
          travelling, photography, and hitting the gym.
        </p>
        <a
          className="arrow-link"
          href="https://drive.google.com/file/d/1pDqCpy_uvj-YGj20IAhCH7V1goMbjt3F/view?usp=sharing"
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
