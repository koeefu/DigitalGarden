import React, { useState } from "react";

export default function WatchList() {
  // State to manage the list of movie items
  const [watchList, setWatchList] = useState([]);
  // States to manage input values
  const [movieName, setMovieName] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  // Function to add a new movie item to the watch list
  const addMovie = () => {
    if (
      movieName.trim() !== "" &&
      director.trim() !== "" &&
      year.trim() !== "" &&
      genre.trim() !== ""
    ) {
      const newMovie = {
        movieName,
        director,
        year,
        genre,
      };

      setWatchList([...watchList, newMovie]);
      // Reset input values after adding a movie
      setMovieName("");
      setDirector("");
      setYear("");
      setGenre("");
    }
  };

  // Function to remove a movie from the watch list
  const removeMovie = (index) => {
    const updatedList = [...watchList];
    updatedList.splice(index, 1);
    setWatchList(updatedList);
  };

  return (
    <div>
      <h2>My Movie Watch List</h2>
      <ul>
        {watchList.map((movie, index) => (
          <li key={index}>
            <li>
              <strong>{movie.movieName}</strong>{" "}
            </li>

            <li>Directed by: {movie.director}</li>

            <li>released in {movie.year}</li>

            <li>Genre: {movie.genre}</li>

            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Movie Name"
        />
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          placeholder="Director"
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <button onClick={addMovie}>Add to Watch List</button>
      </div>
    </div>
  );
}
