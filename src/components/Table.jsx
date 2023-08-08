import React, {useState} from 'react';

  const USERS_URL = 'https://example.com/api/users';
  
  export default function Table () {
    const [result, setResult] = useState();
    const [serch, setSerch] = useState(1);
  
      fetch(`https://example.com/api/users?page=${serch}`)
        .then(res => res.json())
        .then(json => {
          setResult(json);
        })
        .catch((e) =>{
          setResult([]);
        })
    console.log('este es el resultyado ===>',result);
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
          //  render elements in tbody
          </tbody>
        </table>
        <section className="pagination">
          <button onClick={this.onChange} className="first-page-btn">first</button>
          <button onClick={this.onChange} className="previous-page-btn">previous</button>
          <button onClick={this.onChange} className="next-page-btn">next</button>
          <button onClick={this.onChange} className="last-page-btn">last</button>
        </section>
      </div>
    );
  };
  

