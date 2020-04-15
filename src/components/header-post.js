import React, { useState } from "react"
import { Icon } from "@iconify/react"
import instagramIcon from "@iconify/icons-cib/instagram"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterIcon from "@iconify/icons-cib/twitter"
import youtubeIcon from "@iconify/icons-cib/youtube"
import homeIcon from "@iconify/icons-cil/home"

import logo from "../../static/adria-logo.png"

import "../styles/header-post.css"

const HeaderPost = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <div className="header sticky">
        <div className="menu-wrapper">
          <a href="/">
            <Icon icon={homeIcon} className="home-button" />
          </a>
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
      </div>
    </div>
  )
}

export default HeaderPost
