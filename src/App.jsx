import { useCallback, useRef, useState } from "react";
import './App.css';
import Movies from './components/Movies';
import { useSerch } from './hooks/useSerch.js';
import useMovies from './hooks/useMovies.js';
import debounce from "just-debounce-it";

function App() {
  const { formvalues, setFormvalues, errors } = useSerch();
  // const [ years, setYears ] = useState();
  const [ sort, setSort ] = useState(false);
  const {responseMuvies, getMuvies, large, loading, errorResponse } = useMovies(formvalues, sort);

  const newSerch = useRef();

  const debounceSerch = useCallback ( debounce( (newFormvalues) => {
    getMuvies(newFormvalues)
  }, 500), [getMuvies]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newSerch.current !== formvalues){
        getMuvies(formvalues);
        newSerch.current = formvalues;
      }
  };

  const handleOnChange = (event) => {
    const newFormvalues = event.target.value;
    setFormvalues(newFormvalues);
    debounceSerch(newFormvalues);
  };

  const handleSort = (event) =>{
    setSort(!sort);
  };
  const chargedMuvies = !loading ? <Movies muvies={responseMuvies} large={large}/> : 'loading....'

  return (
    <div className='movies_componet'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form_movies' onSubmit={handleSubmit}>
          <input value={formvalues} onChange={handleOnChange} placeholder='Avenger' name='query'/>
          <div className="sort">
            <label>Ordenar por title</label>
            <input type="checkbox" checked={sort} onChange={handleSort}/>
          </div>
          {errors && <p>{errors}</p>}
          <button type='submit' >Buscar</button>
        </form>
      </header>
      <main className='main_muvies'>
        { errorResponse || chargedMuvies }
      </main>
    </div>
  )
};
export default App;