/* function ListCharacters ({ PCharacters}){


return(
<Link to = {"/detail" + item.actor}>

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

</link>





)



}


export default ListCharacters; */
import { Link } from "react-router-dom";
import styles from "../styles/ListCharacters.module.scss"; 
import DefaultImage from "../images/defaultimages.png";




function ListCharacters({ PCharacters, onResetFilters }) {
  
  


  
   
  
  
  return (
    <main>
      {PCharacters.length === 0 ? (
        <div className={styles['no-results']}>
          <p>❌ No se encontraron personajes con ese nombre o casa.</p>
          <button onClick={onResetFilters}>🔙 Volver al listado completo</button>
        </div>
      ) : (
        <ul className={styles['character-list']}>
          {PCharacters.map((item) => (
            <li key={item.id}>
              <Link to={`/detail/${item.id}`}>
               <img
                  src={item.image ? item.image : DefaultImage}
                  alt={item.name}
                   />
                <h2>{item.name}</h2>
                <h3>{item.species}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default ListCharacters;





