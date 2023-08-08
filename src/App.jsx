import './App.css';
import Movies from './components/Movies';
import { useSerch } from './hooks/useSerch.js';
import useMovies from './hooks/useMovies.js';

function App() {
  const { formvalues, setFormvalues, errors } = useSerch();
  const {responseMuvies, getMuvies, large } = useMovies(formvalues);

  const handleSubmit = (event) =>{
    event.preventDefault();
    getMuvies();
  };

  const handleOnChange = (event) =>{
    setFormvalues(event.target.value);
  };

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
      <body className='body_muvies'>
        <Movies muvies={responseMuvies} large={large}/>
      </body>
    </div>
  )
};
export default App;
