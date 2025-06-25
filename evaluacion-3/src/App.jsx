import { useState } from 'react';
import React, { useEffect } from 'react';
import './styles/App.scss';
import './styles/index.scss';
import Header from './components/Header.jsx';
import  FiltersCharacters from './components/FiltersCharacters.jsx';
import ListCharacters from './components/ListCharacters.jsx';
import DetailCharacters from './components/DetailCharacters.jsx';



function App() {
  const[Characters, setListCharacters] = useState([]);
  const[searchName, setSearchName] = useState("");
  const[filterHouse, setFilterHouse] = useState("");
  


  useEffect(() => {
  fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    setListCharacters(data);
  })

},[]);

const house =[... new Set (Characters.map(item => item.house))];

const filterList = Characters.filter(item=> item.name.toLowerCase().includes(searchName.toLowerCase()) )
.filter(item =>item.house === filterHouse || filterHouse === "");
  return (
    <>
     <Header />
     <FiltersCharacters PsearchName={searchName} PsetSearchName ={setSearchName} Phouse ={house}  PfilterHouse = {filterHouse}  PsetFilterHouse ={ setFilterHouse}/>
     <ListCharacters  PCharacters={filterList}/>
     <DetailCharacters/>

    </>
  )
}

export default App
