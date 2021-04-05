import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Player from '../player/player'
import { Container, Grid, NativeSelect } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PastCardHeader from './PastCardHeader'
import PastPageCard from './PastPageCard'

class PastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {age: "Boralesgamuwa"};
  }

   handleChange = (event) => {
    this.setState({age: event.target.value});
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    const moment = require('moment');
    const today = moment();
    // const classes = useStyles();
    return (
      <React.Fragment>
        <Container>
          <h4 style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "38px",
            fontWeight: "bold",
            color: "#3f51b5",}}>{this.state.age} Traffic Light Junction
          </h4>
          <Grid container style={{
            marginTop: "0px", 
            marginBottom:"25px"}}>
            <Grid item xs={3}>
              <FormControl style={{minWidth: "120px", margin: "theme.spacing(1)"}}>
                <InputLabel htmlFor="age-native-helper">Junction</InputLabel>
                  <NativeSelect
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-helper',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value="Boralesgamuwa">Boralesgamuwa</option>
                    <option value="Kottawa">Kottawa</option>
                    <option value="Nugegoda">Nugegoda</option>
                  </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={3} >
              {/* <KeyboardDatePickerExample /> */}
            </Grid>
          </Grid>
          <PastCardHeader />
        </Container>
      <Container>
        <PastPageCard date={today.format('YYYY-MM-DD')} url="https://firebasestorage.googleapis.com/v0/b/trafficlightviolatedetectionsl.appspot.com/o/videonew.mp4?alt=media&token=['idToken']" />
        <PastPageCard date={today.subtract(1, "d").format('YYYY-MM-DD')} url="https://firebasestorage.googleapis.com/v0/b/trafficlightviolatedetectionsl.appspot.com/o/videonew.mp4?alt=media&token=['idToken']" />
        <PastPageCard date={today.subtract(2, "d").format('YYYY-MM-DD')} url="https://firebasestorage.googleapis.com/v0/b/trafficlightviolatedetectionsl.appspot.com/o/videonew.mp4?alt=media&token=['idToken']" />
      </Container>
    </React.Fragment>
    )
  }
}

//firebaseAuth
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createProject: (project) => dispatch(createProject(project))
//   }
// }

export default connect(mapStateToProps)(PastPage)

//