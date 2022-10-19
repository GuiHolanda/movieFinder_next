import React, { useState } from 'react';
import { Heading } from './Heading';
import { Text } from './Text';

export default function MovieForm({
  onSubmitMovie,
  onResetSearch,
}: {
  onSubmitMovie: (movie: string) => void;
  onResetSearch: (movie: string) => void;
}) {
  const [movie, setMovie] = useState<string>('');

  function handleInputChange(evt: any) {
    const movieTitle = evt.currentTarget.value;
    setMovie(movieTitle);
  }

  function handleButtonClick(evt: React.FormEvent) {
    evt.preventDefault();
    onSubmitMovie(movie);
    setMovie('');
  }

  function handleResetButtonClick() {
    setMovie('');
    onResetSearch('');
  }

  return (
    <div className="container p-4 sm:p-0 text-center sm:my-4 m-auto">
      <div className="text-center mb-4">
        <Heading size="md">Get information of any movie</Heading>
        <Heading size="sm" className="sm:text-xl max-w-xl m-auto font-light">
          Find out a bunch of curious informations about any movie you like. You
          can also favorite the films you like the most
        </Heading>
      </div>
      <form
        className="sm:flex items-center my-2 justify-between max-w-2xl m-auto"
        onSubmit={handleButtonClick}
      >
        <input
          onChange={handleInputChange}
          autoFocus
          value={movie}
          className=" p-2 text-xs sm:text-base border-2 w-2/3 sm:mr-2 rounded-lg"
          type="text"
          name="movieInput"
          id="movieInput"
          placeholder="Enter the movie's title"
          required
        />
        <div className="d-flex mt-3 sm:mt-0 justify-content-center m-1">
          <button className="bg-red-800 py-1 text-xs sm:text-base px-3 text-white font-semibold rounded-md">
            Search
          </button>
          <button
            className="bg-red-800 py-1 px-3 text-xs sm:text-base text-white font-semibold rounded-md mx-2"
            type="button"
            onClick={handleResetButtonClick}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
