import React, { useState } from "react";
import Section from "./Component/Section";

const movies = [
  {
    id: 1,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6PCnxKZZIVRanWb710pNpYVkCSw.jpg",
    alt: "Movie One",
    name: "The Killer",
  },
  {
    id: 2,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
    alt: "Movie Two",
    name: "The Crow",
  },
  {
    id: 3,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lWAmlOktRVggBTIfe13JnNxuIOp.jpg",
    alt: "Movie Three",
    name: "Blink Twice",
  },
  {
    id: 4,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dZFkk6qkHkyK8ZLtSnoomVzbK2c.jpg",
    alt: "Movie Four",
    name: "Place of Bones",
  },
  {
    id: 5,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7PFc431SEiHbsMjrkF1VAfFlPn3.jpg",
    alt: "Movie Five",
    name: "LongLegs",
  },
  {
    id: 6,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/35RZnTLKUZ9WMx1y2RZC9rhDcwU.jpg",
    alt: "Movie Six",
    name: "My Penguin Friend",
  },
  {
    id: 7,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tJSbiu7S5pqDnzH9weTW82bYbWu.jpg",
    alt: "Movie Seven",
    name: "It Ends With Us",
  },
  {
    id: 8,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    alt: "Movie Eight",
    name: "Avenger: Endgame",
  },
  {
    id: 9,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    alt: "Movie Nine",
    name: "Avenger: Infinity War",
  },
  {
    id: 10,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    alt: "Movie Ten",
    name: "Spider-Man",
  },
  {
    id: 11,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg",
    alt: "Movie Eleven",
    name: "Spider-Man 2",
  },
  {
    id: 12,
    img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    alt: "Movie Twelve",
    name: "Spider-Man 3",
  },
];
function App() {
  const [movieList, setMovieList] = useState(movies || []);
  const handleSearch = (typeKeyWord) => {
    let newFilteredMovies = movieList.filter((movieObject) =>
      movieObject.name.toLowerCase().includes(typeKeyWord.toLowerCase())
    );
    setMovieList(typeKeyWord.length > 0 ? newFilteredMovies : movies);
  };
  return (
    <>
      <div className="container1 h-[500px] w-[1200px] px-10 py-5 bg-slate-100 overflow-scroll">
        <div className="flex items-center bg-white w-[500px] py-2 m-auto rounded-xl">
          <svg
            className="pl-3 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            placeholder="Enter movie here..."
            className="pl-5 w-[100%] border-none outline-none"
            onChange={(event) => {
              const typeKeyWord = event.target.value;
              handleSearch(typeKeyWord);
            }}
          />
        </div>
        <div className="flex flex-wrap mt-[30px] justify-center">
          {movieList.map((movieObject) => {
            return <Section key={movieObject.id} data={movieObject} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
