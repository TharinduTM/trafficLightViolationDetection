import { Grid } from "@material-ui/core";
import React from "react";
import { Card, Container } from "react-bootstrap";

function PastCardHeader () {
    return(
        <Container>
            <Container>
            <Card
                style={{backgroundColor: "#3f51b5"}}
                >
                <Card.Body key="cardBody" style={{fontWeight: "bold", marginLeft: "15px", height: "45px",paddingTop:"12px"}}>
                    <Grid container spacing={0}>
                        <Grid item xs={6} style={{display: 'flex',
                            justifyContent: 'center',}}>
                            Date
                        </Grid>
                        <Grid item xs={6} style={{display: 'flex',
                            justifyContent: 'center',}}>
                            Watch Video
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            </Container>
        </Container>
    );
}
export default PastCardHeader;