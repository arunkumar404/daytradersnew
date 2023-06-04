import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header_container">
      <p className='company_name'>daytraders</p>
      <div className="tabs_container">
        <div className="tabs">
          <span>Courses</span>
          <span>Learning Resources</span>
          <span>Reviews</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <button className='enroll_btn'>Enroll</button>
      </div>
    </div>
  )
}

export default Header