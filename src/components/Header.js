// import React, { useState } from "react";
// import "./header.css";
// const Header = ({ setShowModal }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <header>
//       <nav className="container">
//         <a href="localhost:3000" className="logo">
//           <img
//             className="web-logo"
//             src="https://th.bing.com/th/id/OIP.tAa6rmkf2AneA1J36x_UAgHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
//             alt="Logo"
//           />
//           {/* Science and Technology Council */}
//         </a>
//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <span />
//           <span />
//           <span />
//         </div>
//         <ul className={`nav-links${menuOpen ? " open" : ""}`}>
//           <li>
//             <a href="localhost:3000" onClick={() => setMenuOpen(false)}>
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#clubs" onClick={() => setMenuOpen(false)}>
//               Clubs
//             </a>
//           </li>
//           <li>
//             <a href="#projects" onClick={() => setMenuOpen(false)}>
//               Projects
//             </a>
//           </li>
//           {/* <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li> */}
//           <li>
//             <button
//               className="btn btn-outline"
//               onClick={() => setShowModal(true)}
//             >
//               Login
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./header.css"; // Make sure this file exists and has styles for your header

const Header = ({ setShowModal }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Track if the mobile menu is open

  // Function to scroll to the top of the page
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Smooth scrolling
    });
    setMenuOpen(false); // Close the menu on click
  };

  return (
    <header>
      <nav className="container">
        {/* Logo link to Home */}
        <Link to="/" className="logo">
          <img
            className="web-logo"
            src="https://th.bing.com/th/id/OIP.tAa6rmkf2AneA1J36x_UAgHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
            alt="Logo"
          />
        </Link>

        {/* Hamburger Icon for mobile navigation */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Home button as an anchor but with scrollToTop */}
          <li>
            <a href="#home" onClick={scrollToTop}>Home</a>
          </li>
          <li>
            <a href="#clubs" onClick={() => setMenuOpen(false)}>Clubs</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          {/* Optional About section */}
          {/* <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li> */}
          <li>
            <button
              className="btn btn-outline"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
