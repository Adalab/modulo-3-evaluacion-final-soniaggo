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
import styles from "../styles/ListCharacters.module.scss";  // Aquí importamos el archivo de estilos




function ListCharacters({ PCharacters, onResetFilters }) {
  
  
  const filteredCharacters = PCharacters.filter(
    (item) => item.image && item.image !== "" && item.image !== null
  );

  
   const defaultImage = "/defalt-image.png"; 
  
  
  return (
    <main>
      {filteredCharacters.length === 0 ? (
        <div className={styles['no-results']}>
          <p>❌ No se encontraron personajes con ese nombre o casa.</p>
          <button onClick={onResetFilters}>🔙 Volver al listado completo</button>
        </div>
      ) : (
        <ul className={styles['character-list']}>
          {filteredCharacters.map((item) => (
            <li key={item.id}>
              <Link to={`/detail/${item.id}`}>
               <img
                  src={item.image ? item.image : defaultImage}
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





