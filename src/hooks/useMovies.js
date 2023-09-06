import { useState, useMemo, useCallback } from 'react';
import useServicesMuvies from '../servises/useFetchMuvies';

export default function useMovies(formvalues, sort) {
  const [responseMuvies, setResponseMuvies] = useState([]);
  const [large, setLarge] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState(null);

  const getMuvies = useCallback( async (formvalues) => {

    try {
      setLoading(true);
      const {responseMvs : responseMuvies, responseLarge} = await useServicesMuvies(formvalues, sort);

      setResponseMuvies(responseMuvies),
      setLarge(responseLarge)
    } catch(e) {
      setErrorResponse('Hubo un problema no esperado');
    } finally {
      setLoading(false);
    }
  }, []);

  const sortResponseMuvies = useMemo(() => {
    return sort ?  [...responseMuvies].sort((a, b) => a.title.localeCompare(b.title)) : responseMuvies
  }, [sort, responseMuvies]);

  return {responseMuvies : sortResponseMuvies, getMuvies, large, loading, errorResponse};
};
