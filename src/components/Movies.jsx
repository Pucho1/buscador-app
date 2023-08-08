import { HasMuvies } from './ListOfMuvies';
import { NoHasMovies } from './NoRenderMovies';
// import useMuvies from '../hooks/useMovies.js'
 
 export default function Movies (props) {
  const { muvies, large } = props;
  console.log('estas son las respuetas ', muvies, large);
  return(
    large
      ? <HasMuvies muvies={muvies}/>
      : <NoHasMovies />
  );
};
