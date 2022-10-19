import React from 'react';
import { instaceOfIMovie } from '../helpers/helperFunctions';
import { IError, IMovie } from '../helpers/httpService';
import FavoriteButton from './FavoriteButton';
import RatingStars from './RatingStars';

export default function ContentCard({
  movieData,
}: {
  movieData: IMovie | IError;
}) {
  const items = Object.keys(movieData);
  return instaceOfIMovie(movieData) ? (
    <div
      className={`flex m-2 flex-col-reverse sm:flex-row sm:mx-auto rounded-lg 
    p-4 sm:my-6 items-center border-2 shadow-lg shadow-gray-400 sm:max-w-3xl md:max-w-4xl lg:max-w-6xl
    `}
    >
      <div className="flex flex-col justify-between mr-4 md:max-w-2xl leading-normal">
        <div className="flex space-x-5 flex-col md:flex-row mb-4 items-center">
          <h1 className="text-xl text-center mb-2 sm:mt-0 sm:text-3xl">
            {movieData.Title}
          </h1>
          <FavoriteButton movie={movieData} />
        </div>
        <p className="text-sm sm:text-base font-light mb-4">{movieData.Plot}</p>
        <ul className=" text-gray-500 divide-y divide-gray-200 ">
          {items.map(item =>
            !['Poster', 'Plot', 'Response', 'Title', 'imdbRating'].includes(
              item
            ) ? (
              <li key={item} className="text-xs sm:text-sm p-2">
                <span className="mb-1 text-gray-900">{item}: </span>
                {movieData[item as keyof IMovie]}
              </li>
            ) : undefined
          )}
          <li className="text-xs flex items-center sm:text-sm p-2">
            <span className="mb-1 mr-2 text-gray-900">IMDb Rating: </span>
            <RatingStars movie={movieData} />
          </li>
        </ul>
      </div>
      <img
        className=" md:h-auto md:w-96 rounded-lg sm:rounded-l-lg"
        src={movieData.Poster}
        alt={movieData.Title}
      />
    </div>
  ) : (
    <div></div>
  );
}
