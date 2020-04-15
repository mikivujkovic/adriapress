import React, { useState } from "react"
import { Icon } from "@iconify/react"
import menuIcon from "@iconify/icons-dashicons/menu"
import instagramIcon from "@iconify/icons-cib/instagram"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterIcon from "@iconify/icons-cib/twitter"
import youtubeIcon from "@iconify/icons-cib/youtube"
import logo from "../../static/adria-logo.png"

import "../styles/header.css"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <div className="header sticky">
        <div className="menu-wrapper">
          <Icon icon={menuIcon} onClick={toggleMenu} />
        </div>
        <div className="logo-wrapper">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="social-wrapper">
          <a
            href="https://www.facebook.com/jovan.radulovic.3304"
            className="dummy"
          >
            <Icon icon={facebookIcon} />
          </a>
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={instagramIcon} />
          </a>
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={twitterIcon} />
          </a>
          <a href="https://www.instagram.com/_radulovic_jovan/">
            <Icon icon={youtubeIcon} />
          </a>
        </div>
        {menu ? (
          <div className="menu">
            <a href="#NAJNOVIJE" onClick={toggleMenu}>
              NAJNOVIJE
            </a>
            <a href="#AUTOMOBILIZAM" onClick={toggleMenu}>
              AUTOMOBILIZAM
            </a>
            <a href="#KULTURA" onClick={toggleMenu}>
              KULTURA
            </a>
            <a href="#SPORT" onClick={toggleMenu}>
              SPORT
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Header
