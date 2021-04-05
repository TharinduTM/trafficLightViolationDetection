import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './SignedInLinks.css'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> :<SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo navSize">Traffic Light Violation Detection</Link>
        {links}
      </div>
    </nav>
  )
}

//firebaseAuth
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
