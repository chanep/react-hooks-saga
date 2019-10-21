import React, { useState } from "react";
import {
  Container,
  Card,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import styles from "./style";

export default () => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleCleanTextClick = e => {
    console.log("10");
  };

  const handleSearchTextClick = e => {
    console.log("10");
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
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
