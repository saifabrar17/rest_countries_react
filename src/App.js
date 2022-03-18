import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Country/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}






// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])

//   return (
//     <div>
//       <h1>REST Countries API Loaded</h1>
//       <h3>{countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)//<p>{country.name.common}</p> )
//       }
//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h3>Name: {props.name}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }

export default App;
