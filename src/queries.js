import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      genres
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId_INT: Int!) {
    movie(id: $movieId_INT) {
      id
      title
      rating
      genres
      medium_cover_image
    }
    suggestions(id: $movieId_INT) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;