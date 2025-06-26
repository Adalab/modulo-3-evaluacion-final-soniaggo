import { useState } from 'react';
import React, { useEffect } from 'react';
import './styles/App.scss';
import './styles/index.scss';
import Header from './components/Header.jsx';
import  FiltersCharacters from './components/FiltersCharacters.jsx';
import ListCharacters from './components/ListCharacters.jsx';
import DetailCharacters from './components/DetailCharacters.jsx';
import { Routes, Route } from 'react-router-dom';



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
    
    
   
    <Routes>
      <Route index element={
        <>
        <Header />
         <FiltersCharacters PsearchName={searchName} PsetSearchName ={setSearchName} Phouse ={house}  PfilterHouse = {filterHouse}  PsetFilterHouse ={ setFilterHouse}/>
         <ListCharacters  PCharacters={filterList}/>
         </>
      }
      ></Route>

      <Route path ="/detail/:actor"  element={<DetailCharacters ListCharactersDetail ={Characters}></DetailCharacters>} ></Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
