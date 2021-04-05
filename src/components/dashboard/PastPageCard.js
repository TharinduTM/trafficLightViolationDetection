import { Grid } from "@material-ui/core";
import { Card, Container } from "react-bootstrap";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TransitionsModal from './Model';
import "./CardPage.css"

const useStyles = makeStyles((theme) => ({
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      // paddingBottom: theme.spacing(0),
      },
      playIcon: {
      height: 38,
      width: 38,
      },
    }));

function PastPageCard (props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };
    return(
      <>
        <Container>
          <Container>
            <Card
              fluid="true"
              className=" shadow bg-dark rounded"
              style={{border: "1px solid blue"}}
              >
                <Card.Body key="cardBody" style={{fontWeight: "bold", paddingLeft: "15px", backgroundColor: "#fffff9"}}>
                  <Grid container >
                    <Grid item xs={6} style={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',}}>
                      {props.date}
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',}}>
                        <span onClick={()=>{
                          setOpen(true);
                          }} 
                          aria-label="play/pause" 
                          className="cardPageIcon">
                          <PlayArrowIcon className={classes.playIcon} />
                        </span>
                      </Grid>
                    </Grid>
                  </Card.Body>
                </Card>
              </Container>
            </Container>
          <TransitionsModal open={open} closeValue={true} handleClose={()=>handleClose()} closeValue={true} url={props.url}/>
        </>
    )}

export default PastPageCard;