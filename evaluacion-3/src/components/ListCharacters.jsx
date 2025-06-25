function ListCharacters ({ PCharacters}){


return(


<main>

<ul>
{PCharacters.map(item =>
<li key={item.id}>
<img src={item.image} alt={item.name} />
<h2>{item.name}</h2>   
<h3>{item.species}</h3> 
</li>)}
</ul>

</main>







)



}


export default ListCharacters;