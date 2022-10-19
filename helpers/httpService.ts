export interface IMovie {
  Genre: string;
  Title: string;
  Plot: string;
  Poster: string;
  Year: String;
  Runtime: string;
  Actors: string;
  Country: string;
  Language: string;
  Director: string;
  Writer: string;
  Response: boolean;
  imdbRating: string;
}

export const API_KEY = 'bdae4255';

export interface IError {
  Response: string;
  Error: String;
}
export default async function getMovie(movieTitle: string): Promise<IMovie> {
  const movieData = await fetch(
    `http://www.omdbapi.com/?t=${movieTitle}&plot=full&apikey=${API_KEY}&`
  ).then(resp => resp.json());

  return {
    Title: movieData.Title,
    Plot: movieData.Plot,
    Genre: movieData.Genre,
    Poster: movieData.Poster,
    Year: movieData.Year,
    Runtime: movieData.Runtime,
    Actors: movieData.Actors,
    Country: movieData.Country,
    Language: movieData.Language,
    Director: movieData.Director,
    Writer: movieData.Writer,
    Response: movieData.Response,
    imdbRating: movieData.imdbRating,
  };
}
