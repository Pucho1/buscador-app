
export function HasMuvies(props){
    const {muvies} = props;
  
    return (
      <ul className="muvies">
        {
          muvies.map((muvi) => (
            <li className="muvie" key ={muvi.id}>
              <h3>{muvi.title}</h3>
              <p className='p_year'>{muvi.year}</p>
              <img src={muvi.poster}/>
            </li>
          ))
        }
      </ul>
    );
  };