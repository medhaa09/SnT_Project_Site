// import React from "react";
// import "./Cards.css";



// const ClubCard = ({ clubData, onClick, index = 0 }) => {
//   const { id, name, description, icon, logo, projectCount } = clubData;

//   return (
//     <div
//       className="club-card"
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//       onClick={() => onClick && onClick(id)}
//     >
//       <div className="club-icon">
//         {logo ? <img src={logo} alt={`${name} logo`} /> : <span>{icon}</span>}
//       </div>
//       <h3 className="club-name">{name}</h3>
//       <p className="club-description">{description}</p>
//       <span className="project-count">{projectCount} Projects</span>
//     </div>
//   );
// };

// export default ClubCard;

import React from "react";
import "./Cards.css";

const ClubCard = ({ clubData, onClick, index = 0 }) => {
  const { id, name, description, icon, logo, projectCount } = clubData;

  return (
    <div
      className="club-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onClick={() => onClick && onClick(id)}
    >
      <div className="club-icon">
        {logo ? <img src={logo} alt={`${name} logo`} /> : <span>{icon}</span>}
      </div>
      <h3 className="club-name">{name}</h3>
      <p className="club-description">{description}</p>
      <span className="project-count">{projectCount} Projects</span>
    </div>
  );
};

export default ClubCard;
