import { useEffect, useRef, useState } from 'react';

export function useSerch() {
  const [errors, setErrors] = useState();
  const [formvalues, setFormvalues] = useState('');
  const isfersRender = useRef(true);

  useEffect(() => {
    if (isfersRender.current) {
      isfersRender.current = formvalues === '';
      return
    }
    if (formvalues === '') {
      setErrors('El campo no puede estar vacio');
      return
    };
    if(formvalues.length < 3 ) {
      setErrors('El campo debe tener mas de 3 caracteres')
      return
    };
    if(formvalues.match(/^\d+$/)) {
      setErrors('No se buscar peliculas con numeros')
      return
    };
    setErrors('')
    },
    [formvalues]
  );
  return {errors, setFormvalues, formvalues}
}