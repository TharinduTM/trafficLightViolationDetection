import { Grid } from "@material-ui/core";
import { Card, Image } from "react-bootstrap";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TransitionsModal from './Model';
import "./CardPage.css"
import LoadingCard from "./LodingCard";
import vehicleImg from "../../img/vehicle.jpg";
import ImageModel from "./ImageModel";
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
      controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(0),
  },
}));


const ViolationCard = ({spells, location}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [imageModel, setImageModel] = React.useState(false);
  const [numberPlate, setNumberplate] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [img, setImg] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseImage = () => {
    setImageModel(false)
  };
  
  let value=0
    return(
      <div>
        {
        spells ? spells.length? spells.map(spell => {
          return(
            <>
              {spell.location==location ? <Card
                  fluid="true"
                  className=" shadow bg-dark rounded"
                  style={{border: "1px solid blue"}}
                  >
                  <Card.Body key="cardBody" style={{fontWeight: "bold", paddingLeft: "15px", backgroundColor: "#fffff9"}}>
                    <Grid container >
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                        {spell.time}
                      </Grid>
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                        {spell.numberPlatenew} {spell.Number_plate}
                      </Grid>
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                        {spell.Vehicle_type}
                      </Grid>
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                        {spell.Violation}
                      </Grid>
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                      <Tooltip arrow title="Watch Number Plate"><Image
                        onClick={()=>{
                          setImageModel(true);
                          setImg(spell.imageUrl);
                          }}
                        src={vehicleImg}
                        rounded
                        className="align-middle imageICon"
                      /></Tooltip>
                      </Grid>
                      <Grid item xs={2} style={{display: 'flex',
                  alignItems: 'center'}}>
                        <span onClick={()=>{
                          setOpen(true);
                          setNumberplate(spell.Number_plate);
                          setUrl(spell.videoUrl);
                          }} 
                          aria-label="play/pause" 
                          >
                          <Tooltip arrow title="Watch Violation Video"><PlayArrowIcon className="cardPageIcon"/></Tooltip>
                        </span>
                      </Grid>
                    </Grid>
                  </Card.Body>
                </Card>: spell.id==1&&<h1 style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop:"150px"
                }}>Not Violation Available</h1>}
                
          </>
          )
        }
        ) :<h1 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:"150px"
        }}>Not Violation Available</h1>  : <LoadingCard />
      }
       <TransitionsModal open={open} handleClose={()=>handleClose()} closeValue={true} numberPlate={numberPlate} url={url}/>
       <ImageModel img={img} open={imageModel} modelClose={() => handleCloseImage()} />
      </div>
    );
}
export default ViolationCard;
