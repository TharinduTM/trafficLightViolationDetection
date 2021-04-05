import { Grid } from "@material-ui/core";
import React from "react";
import { Card, Container } from "react-bootstrap";

function CardHeaderr () {
    return(
            <Card
                style={{backgroundColor: "#3f51b5"}}
                >
                <Card.Body key="cardBody" style={{fontWeight: "bold", marginLeft: "15px", height: "45px",paddingTop:"12px"}}>
                    <Grid container spacing={0}>
                        <Grid item xs={2}>
                            Time
                        </Grid>
                        <Grid item xs={2} >
                            Number Plate
                        </Grid>
                        <Grid item xs={2} >
                            Vehicle Type
                        </Grid>
                        <Grid item xs={2} >
                            Violation
                        </Grid>
                        <Grid item xs={2} >
                            Image
                        </Grid>
                        <Grid item xs={2} >
                            Watch Violation
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
    );
}
export default CardHeaderr;