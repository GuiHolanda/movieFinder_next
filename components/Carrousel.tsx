import React, { useEffect } from 'react';
import { IMovie } from '../helpers/httpService';
import RatingStars from './RatingStars';

export default function Carrousel({
  fansFavorites,
}: {
  fansFavorites: IMovie[];
}) {
  let slideIndex = 1;

  function changeSlide(n: number) {
    showSlide((slideIndex += n));
  }

  function showSlide(n: number) {
    let slides: any = document.getElementsByClassName('mySlides');
    n > slides.length ? (slideIndex = 1) : undefined;
    n < 1 ? (slideIndex = slides.length) : undefined;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'flex';
  }

  useEffect(() => {
    showSlide(slideIndex);
  }, []);

  function groupArray(arr: IMovie[]) {
    const newArray: IMovie[][] = [];
    let k = 0;
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 4; i++) {
        if (Array.isArray(newArray[j])) {
          newArray[j][i] = arr[k];
        } else {
          newArray[j] = [arr[k]];
        }
        k++;
      }
    }
    return newArray;
  }

  const fansFavoritesGroups = groupArray(fansFavorites);

  return (
    <div className="flex gap-2 m-auto">
      {fansFavoritesGroups.map((group, index) => (
        <div
          key={`${index}`}
          id={String(index)}
          className="mySlides order-2 hidden "
        >
          <ul className="flex flex-wrap justify-center xs:space-x-5">
            {group.map(movie => (
              <li key={movie.Title}>
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
      ))}
      <button
        onClick={() => changeSlide(-1)}
        className={`cursor-pointer w-auto select-none p-2 text-white 
      font-bold text-lg order-1 hover:bg-green-600 bg-green-400`}
      >
        prev
      </button>
      <button
        onClick={() => changeSlide(1)}
        className={`cursor-pointer w-auto p-2 text-white 
      font-bold text-lg select-none order-3 hover:bg-green-600 bg-green-400 `}
      >
        next
      </button>
    </div>
  );
}
