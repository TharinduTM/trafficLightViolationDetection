import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/AuthActions'
import "./SignedInLinks.css";

const SignedInLinks = (props) => {
  const [live, setLive] = React.useState(false);
  const [past, setPast] = React.useState(false);
  const [violation, setViolation] = React.useState(false);

  const livePage=() => {
    setLive(true)
    setPast(false)
    setViolation(false)
  }

  const pastPage=() => {
    setLive(false)
    setPast(true)
    setViolation(false)
  }

  const violationPage=() => {
    setLive(false)
    setViolation(true)
    setPast(false)
  }
  return (
    <div>
      <ul className="right">
        <li className="navigatorHover" style={live? {fontWeight: "bold"} : null} onClick={livePage}><NavLink to='/'>Live</NavLink></li>
        <li className="navigatorHover" style={past? {fontWeight: "bold"} : null} onClick={pastPage}><NavLink to='/pastPage'>Past</NavLink></li>
        <li className="navigatorHover" style={violation? {fontWeight: "bold"} : null} onClick={violationPage}><NavLink to='/violationPage'>Violation</NavLink></li>
        {/* firebaseauth */}
        <li className="navigatorHover" ><a onClick={props.signOut}>Log Out</a></li>
        {/*  */}
        {/* <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li> */}
      </ul>
    </div>
  )
}

//firebaseauth
const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)