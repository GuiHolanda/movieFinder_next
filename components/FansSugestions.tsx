import React from 'react';
import { IMovie } from '../helpers/httpService';
import RatingStars from './RatingStars';

export default function FansSugestions({
  fansFavorites,
}: {
  fansFavorites: IMovie[];
}) {
  return (
    <div className="my-4 sm:max-w-4xl mx-auto">
      <h2 className="border-l-4 border-yellow-600 pl-2 text-2xl font-light mb-5">
        Fans's Favorites
      </h2>
      <ul className="flex flex-wrap justify-center xs:space-x-5">
        {fansFavorites.map(movie => (
          <li>
            <div className="w-20 sm:w-48">
              <img
                src={movie.Poster}
                className="rounded-t-lg"
                alt={`${movie.Title} poster`}
              />
              <div className="bg-red-800 rounded-b-lg text-white p-2">
                <h3>{movie.Title}</h3>
                <div className="flex items-center justify-between">
                  <RatingStars movie={movie}></RatingStars>
                  <span>{movie.imdbRating}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
