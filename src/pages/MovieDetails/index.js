import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
//useSelector para poder obtener el resultado del store
//cuando el reducer lo actualice
import { useDispatch, useSelector } from "react-redux";
import { movieResult as movieResultSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";

const MovieDetail = ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector(state => movieResultSelector(state));

  useEffect(() => {
    const movieId = match.params.id;
    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });

  if (!movieResult) {
    return <CircularProgress size={100} color="primary" />;
  }

  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Actores: </strong> {movieResult.Actors}{" "}
      </Typography>
      <Typography>
        <strong>Director: </strong> {movieResult.Director}{" "}
      </Typography>
      <Typography>
        <strong>Pais: </strong> {movieResult.Country}{" "}
      </Typography>
      <Typography>
        <strong>Clasificación: </strong> {movieResult.Rated}{" "}
      </Typography>
      <Typography>
        <strong>Premios: </strong> {movieResult.Awards}{" "}
      </Typography>
      <Typography>
        <strong>Sinopsis: </strong> {movieResult.Plot}{" "}
      </Typography>
    </Container>
  );
};

export default MovieDetail;
