import { useRef } from "react";
import './App.css';
import Movies from './components/Movies';
import { useSerch } from './hooks/useSerch.js';
import useMovies from './hooks/useMovies.js';

function App() {
  const { formvalues, setFormvalues, errors } = useSerch();
  const {responseMuvies, getMuvies, large, loading, errorResponse } = useMovies(formvalues);
  const newSerch = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (newSerch.current !== formvalues){
        getMuvies();
        newSerch.current = formvalues;
      }
  };

  const handleOnChange = (event) =>{
    setFormvalues(event.target.value);
  };
  const chargedMuvies = !loading ? <Movies muvies={responseMuvies} large={large}/> : 'loading....'

  return (
    <div className='movies_componet'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form_movies' onSubmit={handleSubmit}>
          <input value={formvalues} onChange={handleOnChange} placeholder='Avenger' name='query'/>
          {errors && <p>{errors}</p>}
          <button type='submit' >Buscar</button>
        </form>
      </header>
      <main className='main_muvies'>
        {errorResponse || chargedMuvies }
      </main>
    </div>
  )
};
export default App;