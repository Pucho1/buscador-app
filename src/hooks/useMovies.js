import { useState } from 'react';
// import responseMuvies from '../mocks/jason_data_movies.json';

export default function useMovies(formvalues) {
  const [responseMuvies, setResponseMuvies] = useState([]);
  const [large, setLarge] = useState(0);
  console.log(formvalues)
  // const mapedMuvies = responseMuvies.Search?.map((muvi) => ({ 
  //   title: muvi.Title,
  //   year: muvi.Year,
  //   poster: muvi.Poster,
  //   id: muvi.imdbID
  // }));
  
  const getMuvies = () => {
    formvalues ?
      fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${formvalues}`)
        .then(res => res.json())
        .then(json => {
          setResponseMuvies(json.Search);
          setLarge(json.totalResults);
        })
        .catch((e) =>{
          setResponseMuvies([]);
        })
    :
    setResponseMuvies([]);
  }

  return {responseMuvies, getMuvies, large};
};



