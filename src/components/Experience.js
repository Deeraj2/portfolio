import React from "react";
import ExperienceData from "./ExperienceData";

const Experience = () => {
  return (
    <section className="section experience">
      <div className="section-title">Experience</div>
      <div className="section-content-exp">
        <ExperienceData
          title="CRM Executive Development"
          date="April 2023 - Present"
          title2="Schbang Private Limited Mumbai, Maharashtra"
          descTitle="Zoho CRM Development:"
          descTitle2="Email Campaign Creation:"
          descTitle3="Campaign Project Backend Development:"
          descTitle4="WhatsApp Integration and Campaigns"
          desc1=" Customized Zoho CRM platforms to meet client requirements, creating tailored layouts and
workflows based on user preferences."
          desc2="Designed and implemented marketing email campaigns for various clients, ensuring engaging
content and effective brand communication."
          desc3=" Developed backend solutions for campaign projects using Node.js, creating
APIs and integrating with CRM systems for seamless campaign management and execution."
          desc4="Created WhatsApp chatbots, executed WhatsApp campaigns, and sent
WhatsApp templates through backend integration for lead nurturing."
          usedArray={[
            "Britannia",
            "Cordelia Cruises",
            "Nivea",
            "Bodycraft Clinic and Salon",
            "Bodycraft Academy",
            "JLL",
            "Kotak 811",
            "Estee Lauder",
            "MAC",
            "Bobbi Brown",
            "Clinique",
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
