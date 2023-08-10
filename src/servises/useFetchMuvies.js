import APY_KEY from '../constants/constant';

const useServicesMuvies = async (formvalues)  =>{

  if (!formvalues) return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&s=${formvalues}`);
    const json = await response.json();
    
    return { responseMvs: json.Search?.map((muvi) => ({
      title: muvi.Title,
      year: muvi.Year,
      poster: muvi.Poster,
      id: muvi.imdbID
    })), responseLarge: json.totalResults}
  }
  catch(e) {
    throw new Error('algo salio mal');
  }
};
export default useServicesMuvies;
