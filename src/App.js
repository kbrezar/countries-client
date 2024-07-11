import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

function App() {

  //let [query, setQuery] = useState("");

  let [countries, setCountries] = useState();
  
  const getCountries = async (q) => {
    
    if(q.length > 2) {
      console.log("getting countries...");
      try{

        const response = await api.get(q);
  
        console.log("Response.data is null: " + response.data == null);
  
        setCountries(response.data);
  
      } catch(err){
        console.log("An error occured: " + err);
      }
    } else{
      console.log("waiting for query to be long enough...");
      setCountries(null);
    }

  }

  return (
    <div className="App">
      <h1>Iskanje držav</h1>
      <label style={{margin: "1%"}}>Iskanje:</label>
      <input type='text' onChange={e => getCountries(e.target.value)}></input>

      <div>

        <ul>
          {countries == null || countries == "" ? <div style={{fontSize: "75%"}}>Vnesite vsaj tri znake ali drugačno geslo za prikaz rezultatov.</div>
            : countries.map(country => <div className='countryBox'>
                Ime države: {country.name}<br>
              </br>Glavno mesto: {country.capital}<br>
              </br>Prebivalstvo: {country.population}<br>
              </br>Območje: {country.region}<br>
              </br>Trimestna koda države: {country.code}
              </div>) 
              }
        </ul>

      </div>
    </div>
  );
}

export default App;
