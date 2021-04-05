import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/AuthActions'
import "./LoginPage.css";

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //firebaseauth
    this.props.signIn(this.state);
    //
  }
  render() {
    //firebaseauth
    const {authError, auth} = this.props;
    if (auth.uid) return <Redirect to='/' />
    //
    return (
      <section className="login">
            <div className="loginContainer">
                <label style={{fontSize: "40px", textAlign: "center", fontWeight: "bold"}}>Login Page</label>
                <label>Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
                {/* <p className="errorMsg">{emailError}</p> */}
                <label>password</label>
                <input type="password" id='password' onChange={this.handleChange} />
                {/* firebaseauthh */}
                 <div className="red-text center">
                 {authError ? <p>{authError}</p> : null}
               </div>
               {/*  */}

                <div className="btnContainer" style={{textAlign: "center"}}>
                 <button onClick={this.handleSubmit} className="btn pink lighten-1 z-depth-0 buttonStyle">Log in</button>
                </div>

            </div>
        </section>



      // <div className="container">
      //   <form className="white" onSubmit={this.handleSubmit}>
      //     <h5 className="grey-text text-darken-3">Sign In</h5>
      //     <div className="input-field">
      //       <label htmlFor="email">Email</label>
      //       <input type="email" id='email' onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="password">Password</label>
      //       <input type="password" id='password' onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <button className="btn pink lighten-1 z-depth-0">Login</button>
      //       {/* firebaseauthh */}
      //       <div className="red-text center">
      //         {authError ? <p>{authError}</p> : null}
      //       </div>
      //       {/*  */}
      //     </div>
      //   </form>
      // </div>
    )
  }
}

//firebaseauth
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
