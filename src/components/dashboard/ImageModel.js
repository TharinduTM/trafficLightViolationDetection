import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ImageModelComponent from './ImageModelComponent';
import { Fade } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ImageModel(props) {
    const classes = useStyles();

  const closeIcon=()=>{
    props.modelClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Fade>
            <ImageModelComponent img={props.img} modelClose={() => closeIcon()} /> 
        </Fade>
      </Modal>
      
      
    </div>
    
  );
}