import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        {/* <li><NavLink to='/signup'>Signup</NavLink></li> */}
        <li style={{fontWeight: "bold", fontSize:"16px"}}><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks