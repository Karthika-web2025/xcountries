import React, { useEffect, useState } from 'react';
import './App.css';
import Countrycard from './CountryCard';

function App() {
  const [ countries,setcountries] = useState([])
  
 useEffect(() => {
  const fetchCountries = async () => {
    try {
      const res = await fetch("https://xcountries-backend.labs.crio.do/all");

   
      if (!res.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await res.json();
      setcountries(data);

    } catch (error) {
      console.error(error);
      
    }
  };

  fetchCountries();
}, []);

  return (
   <div className='container'>
    {countries.map((country,index)=>(
 <Countrycard key={index} name={country.name} flag={country.flag}/>
    ))}
   
   </div>
  );
}

export default App;
