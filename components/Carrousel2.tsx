import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { IMovie } from '../helpers/httpService';
import { Card } from './Card';
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
    <div className="flex sm:h-96 items-center gap-2 m-auto">
      {fansFavoritesGroups.map((group, index) => (
        <div
          key={`${index}`}
          id={String(index)}
          className="mySlides order-2 hidden "
        >
          <ul className="flex flex-wrap justify-center xs:space-x-5">
            {group.map(movie => (
              <li key={movie.Title}>
                <Card.Root>
                  <Card.Image>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  </Card.Image>
                  <Card.Details>
                    <h3>{movie.Title}</h3>
                    <div className="flex items-center gap-4">
                      <RatingStars movie={movie}></RatingStars>
                      <span>{movie.imdbRating}</span>
                    </div>
                  </Card.Details>
                </Card.Root>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={() => changeSlide(-1)}
        className={`cursor-pointer w-auto select-none p-2 
      font-bold text-lg order-1 `}
      >
        <ChevronLeftIcon className="w-8 h-8 hover:scale-150" />
      </button>
      <button
        onClick={() => changeSlide(1)}
        className={`cursor-pointer w-auto p-2  
      font-bold text-lg select-none order-3  `}
      >
        <ChevronRightIcon className="w-8 h-8 hover:scale-150" />
      </button>
    </div>
  );
}
