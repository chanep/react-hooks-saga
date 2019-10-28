import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import { MovieIcon } from "../../icons/index";
import styles from "./style";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleCleanTextClick = e => {
    setSearchText("");
  };

  const handleSearchTextClick = e => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
            <Typography variant="h6">
              Busca tu pelicula con la api de IMDb
            </Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
