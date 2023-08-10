import { useState } from 'react';
import useServicesMuvies from '../servises/useFetchMuvies';

export default function useMovies(formvalues) {
  const [responseMuvies, setResponseMuvies] = useState([]);
  const [large, setLarge] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState(null);

  const getMuvies = async () => {

    try {
      setLoading(true);
      const {responseMvs : responseMuvies, responseLarge} = await useServicesMuvies(formvalues);
      setResponseMuvies(responseMuvies),
      setLarge(responseLarge)
    } catch(e) {
      setErrorResponse('Hubo un problema no esperado');
    } finally {
      setLoading(false);
    }
  }
  return {responseMuvies, getMuvies, large, loading, errorResponse};
};
