import type { NextPage } from 'next';
import { useState } from 'react';
import Carrousel from '../components/Carrousel';
import ContentCard from '../components/ContentCard';
import FansSugestions from '../components/FansSugestions';
import MovieForm from '../components/MovieForm';
import getMovie, { API_KEY, IError, IMovie } from '../helpers/httpService';
import { fansFavoriteMoviesTitles } from '../helpers/datas';
import Carrousel2 from '../components/Carrousel2';
import Carrousel03 from '../components/Carrousel03';

export async function getStaticProps() {
  async function fillDataArray() {
    const MoviesDatas = await Promise.all(
      fansFavoriteMoviesTitles.flat().map(async movie => {
        const response = await fetch(
          `http://www.omdbapi.com/?t=${movie}&plot=full&apikey=${API_KEY}&`
        );
        return await response.json();
      })
    );
    return MoviesDatas;
  }

  const fansFavoriteMoviesDatas = await fillDataArray();

  return {
    props: {
      fansFavoriteMoviesDatas,
    },
  };
}

const Home = ({
  fansFavoriteMoviesDatas,
}: {
  fansFavoriteMoviesDatas: IMovie[];
}) => {
  const [movieData, setMovieData] = useState<IMovie | IError>({
    Response: '',
    Error: 'Incorrect IMDb ID.',
  });

  function handleSearchClick(movie: string) {
    movie === ''
      ? setMovieData({
          Response: '',
          Error: 'Incorrect IMDb ID.',
        })
      : getMovie(movie).then(setMovieData);
  }

  return (
    <>
      <MovieForm
        onSubmitMovie={(movie: string) => handleSearchClick(movie)}
        onResetSearch={(movie: string) => handleSearchClick(movie)}
      />
      <ContentCard movieData={movieData} />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carrousel03 contentList={fansFavoriteMoviesDatas} />
      </div>
    </>
  );
};

export default Home;
