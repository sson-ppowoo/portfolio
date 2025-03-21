import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header_i">
        <div className="logobox">
          <h1 className="logo">
            <a href="/">
              <img src="/img/main/logo.png" alt="logo" />
            </a>
          </h1>
          <p>sson_ppowoo's portfolio</p>
        </div>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li
            className={`menuli ${activeMenu === 'Main' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Main')}
          >
            Main
          </li>
          <li
            className={`menuli ${activeMenu === 'About' ? 'active' : ''}`}
            onClick={() => handleMenuClick('About')}
          >
            About
          </li>
          <li
            className={`menuli ${activeMenu === 'Skills' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Skills')}
          >
            Skills
          </li>
          <li
            className={`menuli ${activeMenu === 'Work' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Work')}
          >
            Work
          </li>
          <li
            className={`menuli ${activeMenu === 'Contact' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Contact')}
          >
            Contact
          </li>
        </ul>
        
        <div className={`ham ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
