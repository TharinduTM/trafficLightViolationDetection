import { Tooltip } from "@material-ui/core";
import { Container } from "react-bootstrap";
import React, {useEffect} from 'react';
import "./CardPage.css"
import "./CardPage.css"
import { FaTimesCircle } from 'react-icons/fa';
import { Image } from "react-bootstrap";
import LoadingPage from "./LoadingPage";


function ImageModelComponent (props) {
  const [render, setRender] = React.useState("")
  const [renderr, setRenderr] = React.useState("")

  useEffect(() => {
    setTimeout(function() { //Start the timer
      setRender(true) //After 1 second, set render to true
    }.bind(this), 2000)
  },[]);

  useEffect(() => {
    setTimeout(function() { //Start the timer
      setRenderr(true) //After 1 second, set render to true
    }.bind(this), 3000)
  },[]);

  const handleClose = () => {
    props.modelClose()
    };
  return(
    <Container  maxWidth="md">
      {renderr&&<div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}>
        <Tooltip arrow title="Close Image">
          <span>
            <FaTimesCircle style={{color:"red", backgroundColor:"black"}} className="closeIconModel" onClick={() => handleClose()} />
          </span>
        </Tooltip>
        </div>}
      {render?<div  
        style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}>
        <Image
          style={{width: "600px", height: "550px"}}
          src={props.img}
          rounded
          className="align-middle vector1style"
          />
         </div>:<LoadingPage />}
      </Container>
    )}

export default ImageModelComponent;