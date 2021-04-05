import React, { Component } from 'react'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Container, Grid, NativeSelect } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux'
import CardHeaderr from './CardHeader'
import ViolationCard from './CardPage'
import { firestoreConnect } from 'react-redux-firebase';


class ViolationPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {age: "Boralesgamuwa",
    spells: "", 
    values: [] 
  };
  }

   handleChange = (event) => {
    this.setState({age: event.target.value});
  };

  render() {
    const { spells, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
  
    return(
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
          <CardHeaderr />
        </Container>
      <Container>
        <ViolationCard spells={spells} location={this.state.age} />
      </Container>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spells: state.firestore.ordered.spells,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'spells' }
  ])
)(ViolationPage)
