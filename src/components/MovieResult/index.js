import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import style from "./style";

const MovieResult = props => {
  const { Title, Year, Type, imdbID, Poster, history } = props;

  const classes = style();

  const handleSeeMovie = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <div>
      <Card className={classes.cardContainer}>
        <Grid container>
          <Grid item>
            <img src={Poster} alt={Title} className={classes.poster} />
          </Grid>
          <Grid item className={classes.titlesContainer}>
            <Typography>{Title}</Typography>
            <Typography> {Year} </Typography>
            <Typography> {Type} </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSeeMovie}
            >
              Ver más
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default withRouter(MovieResult);
