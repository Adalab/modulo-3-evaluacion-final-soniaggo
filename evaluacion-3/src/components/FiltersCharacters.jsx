function FiltersCharacters ({PsearchName ,PsetSearchName, Phouse,PfilterHouse, PsetFilterHouse}){

    const handleName =(ev)=>{
      ev.preventDefault();
        PsetSearchName(ev.target.value); 

    }
const handleHouse = (ev) => {
    ev.preventDefault();
    PsetFilterHouse(ev.target.value);



    }

return(

<form>
    <label htmlFor="">Buscar por personaje</label>
    <input 
    type="search" 
    name="search"
    placeholder=" filtar por nombre" 
    value={PsearchName}
    onChange={handleName}/>

<select name="" 
id=""
value={PfilterHouse}
onChange={handleHouse}>
    <option value="">Todas</option>

  {Phouse.map((house,id) =>
   <option
     key={house}
     value={house}>
     {house}
   </option>

 )}
</select>

</form>








)}

export default FiltersCharacters;