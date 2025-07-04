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
  const[selectedStatus, setSelectedStatus] = useState("");


  useEffect(() => {
  fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    setListCharacters(data);
  })

},[]);

const house =[... new Set (Characters.map(item => item.house))];


  const handleResetFilters = () => {
     setSearchName("");
     setFilterHouse("");
};

const filterList = Characters
  .filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter(item => item.house === filterHouse || filterHouse === "")
  .filter(item => selectedStatus === "" || (selectedStatus === "Alive" ? item.alive : !item.alive));

  return (
    <>

  
   
    <Routes>
      <Route index element={
        <>
        <Header />
         <FiltersCharacters PsearchName={searchName} PsetSearchName ={setSearchName} Phouse ={house}  PfilterHouse = {filterHouse}  PsetFilterHouse ={ setFilterHouse}selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus} />
         <ListCharacters  PCharacters={filterList} onResetFilters={handleResetFilters} />
         </>
      }
      ></Route>

      <Route path ="/detail/:id"  element={<DetailCharacters ListCharactersDetail ={Characters}></DetailCharacters>} ></Route>
      <Route path="*" element={<h1>El personaje que buscas no existe</h1>} />
    </Routes>
    </>
  )
}

export default App
