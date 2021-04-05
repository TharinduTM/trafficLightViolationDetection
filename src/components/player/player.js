import React, {useState, useRef} from "react";
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import PlayerControls from "./playerControls";
import screenfull from "screenfull";

const useStyles = makeStyles((theme) => ({
    playerWrapper: {
      width: "100%",
      position: "relative",
    }
  }));

  const format = (seconds) => {
    if(isNaN(seconds)){
      return "00:00"
    }

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = date.getUTCSeconds().toString().padStart(2,"0")
    if(hh){
      return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`
    }

    return `${mm}:${ss}`
  }

 let count =0

function Player(props){
    const classes = useStyles();
  
    const [state, setState] = useState({
      playing: false,
      muted: true,
      volume: 0.5,
      playbackRate: 1.0,
      played:0,
      seeking:false,
  })

  const playerRef = useRef(null)
  const playerContainerRef = useRef(null)
  const  [timeDisplayFormat, setTimeDisplayFormat] = useState("normal")
  const controlRef = useRef(null);
  
  const {playing, muted, volume, playbackRate, played } = state; 
  
  const handlePlayPause = () => {
    setState({
      ...state,
      playing: !state.playing,
    })
  }
  
  const handleRewind = () =>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()-10)
  }
  const handleFastForward = () =>{
    playerRef.current.seekTo(playerRef.current.getCurrentTime()+10)
  }
  
  const handleMute = () =>{
    setState({
      ...state,
      muted: !state.muted,
    })
  }

  const handleClose = () => {
      props.closeIcon()
  }

  const handleVolumeChange = (e,newValue) => {
    setState({
        ...state,
        volume: parseFloat(newValue/100),
        muted: newValue===0?true:false
    })
  }

  const handleVolumeSeekUp = (e,newValue) => {
    setState({
        ...state,
        volume: parseFloat(newValue/100),
        muted: newValue===0?true:false
    })
  }

  const handlePlaybackRateChange = (rate) =>{
      setState({
          ...state,
          playbackRate: rate
      })
  }

  const toggleFullScreen = () =>{
      screenfull.toggle(playerContainerRef.current)
  }

  const handleProgress = (changeState) => {

    if(count>3){
      controlRef.current.style.visibility = "hidden"
      count = 0
    }

    if(controlRef.current.style.visibility === "visible"){
      count = count+1;
    }

    if(!state.seeking){
      setState({
        ...state,
        ...changeState
      })
    }
  }

  const handleSeekChange = (e,newValue) => {
    setState({
      ...state,
      played: parseFloat(newValue/100)
    })
  }

  const handleSeekMouseDown = (e) => {
    setState({
      ...state,
      seeking: true
    })
  }

  const handleSeekMouseUp = (e,newValue) => {
    setState({
        ...state,
        seeking: false,
    })
   playerRef.current.seekTo(newValue/100)
  }

  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal"?"remaining" : "normal",
    )
  }

  const handleMouseMove = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  }

  // const currentTime = "00:00"
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00"

    // const duration = "00:00"
  
    const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00"

    const elapsedTime = timeDisplayFormat==="normal"
      ? format(currentTime)
      : `-${format(duration-currentTime)}`
    const totalDuration = format(duration)
  


  
    return(
        <React.Fragment>
            <Container maxWidth="md" style={{marginTop: "50px"}}>
                <div 
                  ref={playerContainerRef} 
                  className={classes.playerWrapper}
                  onMouseMove={handleMouseMove}>
                    <ReactPlayer
                        ref = {playerRef}
                        width="100%"
                        height="100%"
                        url={props.urll}
                        playing={playing}
                        muted={muted}
                        volume={volume}
                        playbackRate={playbackRate}
                        onProgress={handleProgress}
                    />
                    {/* <ReactPlayer url=" https://www.youtube.com/watch?v=VxpXrrzJgYw" /> */}

                    <PlayerControls
                        numberPlate={props.numberPlate}
                        ref={controlRef}
                        onRewind = {handleRewind} 
                        onPlayPause={handlePlayPause} 
                        playing={playing}
                        onFastForward={handleFastForward}
                        muted={muted}
                        onMute={handleMute}
                        onClose={handleClose}
                        onVolumeChange={handleVolumeChange}
                        onVolumeSeekUp={handleVolumeSeekUp}
                        volume={volume}
                        playbackRate={playbackRate}
                        onPlaybackRateChange={handlePlaybackRateChange}
                        onToggleFullScreen={toggleFullScreen}
                        closeValue={props.closeValue}
                        played={played}
                        onSeek={handleSeekChange}
                        onSeekMouseDown={handleSeekMouseDown}
                        onSeekMouseUp={handleSeekMouseUp}
                        elapsedTime={elapsedTime}
                        totalDuration={totalDuration}
                        onChangeDisplayFormat={handleChangeDisplayFormat}
                    />
                </div>
            </Container>
        </React.Fragment>
        );

}

export default Player;