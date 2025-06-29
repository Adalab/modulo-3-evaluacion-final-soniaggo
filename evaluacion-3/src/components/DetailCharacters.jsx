/* 
 import { useParams } from "react-router-dom";


function DetailCharacters ({ListCharactersDetail}) {
 
     const params = useParams();
    const actor = params.actor;

 const characterDetail = ListCharactersDetail.find((item) => item.actor === (actor));

 return(
 <>
 <h1>detalle de personaje</h1>
 <div>
     <img src={characterDetail.image} alt={characterDetail.name} />
     <h2>{characterDetail.name}</h2>   
     <h3>{characterDetail.species}</h3> 
     <h3>{characterDetail.ancestry}</h3>
    <h3>{characterDetail.house}</h3>
    <h3>{characterDetail.actor}</h3>
 </div>
 </>


 )


}
export default DetailCharacters;
 */
import { useParams, Link } from "react-router-dom";
import styles from "../styles/DetailCharacters.module.scss";  // Importa los estilos de Sass

function DetailCharacters({ ListCharactersDetail }) {
  const params = useParams();
  const actor = params.id;

  const characterDetail = ListCharactersDetail.find((item) => item.id === actor);

  return (
    <div className={styles["detail-container"]}>
      <h1>Detalle de personaje</h1>
      <div>
        <img src={characterDetail.image} alt={characterDetail.name} />
        <h2>{characterDetail.name}</h2>
        <h3>{characterDetail.species}</h3>
        <h3>{characterDetail.ancestry}</h3>
        <h3>{characterDetail.house}</h3>
        <h3>{characterDetail.actor}</h3>
      </div>
      
      {/* Botón de volver */}
      <Link to="/">
        <button>Volver a la lista</button>
      </Link>
    </div>
  );
}

export default DetailCharacters;


