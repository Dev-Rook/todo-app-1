import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className="Nav-Bar">
        <div className="Logo-Brand-Box">
            <img src={require("../../Assets/Icons/Logo.webp")} alt="" className="Logo" />
            <h3 className="Brand">Brand</h3>
        </div>
    </nav>
  )
}

export default Header