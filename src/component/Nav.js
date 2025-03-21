import React, { useState } from 'react';

function Nav() {
  const [activeMenu, setActiveMenu] = useState(null);
  
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const section = document.getElementById(menu);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='nav'>
      <div className='Right_nav_box'>
        <ul className="Right_nav">
          <li
            className={`navli ${activeMenu === 'Main' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Main')}
          >
            Main
          </li>
          <li
            className={`navli ${activeMenu === 'About' ? 'active' : ''}`}
            onClick={() => handleMenuClick('About')}
          >
            About
          </li>
          <li
            className={`navli ${activeMenu === 'Skills' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Skills')}
          >
            Skills
          </li>
          <li
            className={`navli ${activeMenu === 'Work' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Work')}
          >
            Work
          </li>
          <li
            className={`navli ${activeMenu === 'Contact' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Contact')}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

