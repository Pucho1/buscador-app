
export function HasMuvies(props){
    const {muvies} = props;
  
    return (
      <ul className="muvies">
        {
          muvies.map((muvi) => (
            <li className="muvie" key ={muvi.imdbID}>
              <h3>{muvi.Title}</h3>
              <p className='p_year'>{muvi.Year}</p>
              <img src={muvi.Poster}/>
            </li>
          ))
        }
      </ul>
    );
  };