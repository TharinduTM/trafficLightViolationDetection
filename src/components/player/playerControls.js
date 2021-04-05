import React, {forwardRef, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton, Tooltip } from "@material-ui/core";
import FastRewindIcon from '@material-ui/icons/FastRewind';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PauseIcon from '@material-ui/icons/Pause';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';
import Popover from '@material-ui/core/Popover';
import VolumeOff from '@material-ui/icons/VolumeOff';
import './PlayerController.css'
import LoadingPage from "../dashboard/LoadingPage";

const useStyles = makeStyles((theme) => ({
    controllerWraper   : {
      position:"absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // background: "rgb(0,0,0,0.6)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      zIndex: 1,
    },
    controlIcon: {
      color: "#777",
      fontSize: 50,
      transform: "scale(0.9)",
      "&:hover":{
        color: "#fff",
        transform: "scale(1)",
      },
    },
    bottomIcon: {
      color: "#999",
      "&:hover":{
        color: "#fff",
      },
    },
    volumeSlider: {
      width: 100
    }
  }));
  
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value} key="abc">
        {children}
      </Tooltip>
    );
  }
  
  const PrettoSlider = withStyles({
    root: { 
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
    closeIcon: {

    }
  })(Slider);

  export default forwardRef (({onPlayPause, 
  playing, 
  onRewind, 
  onFastForward, 
  muted, 
  onMute,
  closeValue, 
  onClose,
  numberPlate, 
  onVolumeChange, 
  onVolumeSeekUp,
  onPlaybackRateChange,
  playbackRate,
  onToggleFullScreen,
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
  elapsedTime,
  onChangeDisplayFormat,
  totalDuration,
  played,
  volume}, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
  const handlePropover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popover' : undefined; 
  const [render, setRender] = React.useState("")
    
  useEffect(() => {
    setTimeout(function() { //Start the timer
      setRender(true) //After 1 second, set render to true
    }.bind(this), 4000)
  },[]);
    return(
    <div className={classes.controllerWraper} ref={ref}>
            <Grid container direction="row" justify="space-between">
            {render?<Grid item>
                {closeValue&&<Typography variant="h5" style={{color:"#fff", paddingTop: "60px", paddingLeft:"5px"}}>
                  {numberPlate}
                </Typography>}
              </Grid>:null}
              {render?<Grid item>
                {closeValue&&<Tooltip arrow title="Close Video"><button className="playerHover" type="button" class="close" aria-label="Close" style={{cursor: "pointer", backgroundColor: "transparent", fontSize:"38px", borderColor: "transparent", paddingRight:"15px"}} onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button></Tooltip>}
              </Grid>:null}
              </Grid> 
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="center"
                >
                {render?<IconButton onClick={onRewind} className={classes.controlIcon}
                  aria-label="reqind">
                  <FastRewindIcon fontSize="inherit"/>
                </IconButton>:null}

                {render?<IconButton onClick={onPlayPause} className={classes.controlIcon}
                  aria-label="reqind">
                  {playing?<PauseIcon fontSize="inherit"/>:<PlayArrowIcon fontSize="inherit"/>}
                </IconButton>:<LoadingPage />}

                {render?<IconButton onClick={onFastForward} className={classes.controlIcon}
                  aria-label="reqind">
                  <FastForwardIcon fontSize="inherit"/>
                </IconButton>:null}
              </Grid>
              
              <Grid 
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{padding: 16}}>
                  <Grid item xs={12}>
                  {render?<PrettoSlider
                      min={0}
                      max={100}
                      value={played*100}
                      onChange={onSeek}
                      onMouseDown={onSeekMouseDown}
                      onChangeCommitted={onSeekMouseUp}
                      ValueLabelComponent={(props)=>(
                        <ValueLabelComponent {...props}
                          value={elapsedTime}
                      />)}
                      />:null}
                  </Grid>
                  <Grid item>
                    <Grid 
                      container
                      direction="row"
                      alignItems="center">

                      {render?<IconButton onClick={onPlayPause} className={classes.bottomIcon}>
                      {playing?<PauseIcon fontSize="inherit"/>:<PlayArrowIcon fontSize="large" />} 
                      </IconButton>:null} 
                      
                      {render?<IconButton onClick={onMute} className={classes.bottomIcon}>
                        {muted?<VolumeOff fontSize="large" />:<VolumeUpIcon fontSize="large" />} 
                      </IconButton>:null} 
                      {render?<Slider
                        min={0}
                        max={100}
                        volume={volume*100}
                        className={classes.volumeSlider}
                        onChange={onVolumeChange}
                        onChangeCommitted= {onVolumeSeekUp} />:null}
                      {render?<Button 
                        onClick={onChangeDisplayFormat}
                        variant="text"
                        style={{color:"#fff",marginLeft: 16}}
                        >
                        <Typography>
                          {elapsedTime}/{totalDuration}
                        </Typography>
                      </Button>:null}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button onClick={handlePropover} variant="text" className={classes.bottomIcon}>
                    {render?<Typography>
                        {playbackRate}x
                      </Typography>:null}
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        >
                      {render?<Grid container direction="column-reverse">
                        {[0.5,1,1.5,2].map((rate)=>(<Button onClick={()=>onPlaybackRateChange(rate)} variant="text">
                        <Typography color={rate===playbackRate?"secondary":"default"}>
                          {rate}
                        </Typography>
                        </Button>))}
                      </Grid>:null}
                    </Popover>
                    {render?<IconButton onClick={onToggleFullScreen} className={classes.bottomIcon}>
                      <FullscreenIcon fontSize="large" /> 
                    </IconButton>:null} 
                  </Grid>
               
            </Grid>
          </div>
);}
  )
