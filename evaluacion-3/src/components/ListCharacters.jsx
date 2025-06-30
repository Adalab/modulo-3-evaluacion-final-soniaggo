
import { Link } from "react-router-dom";
import styles from "../styles/ListCharacters.module.scss"; 
import DefaultImage from "../images/defaultimages.png";




function ListCharacters({ PCharacters, onResetFilters }) {
  
  
  return (
    <main>
      {PCharacters.length === 0 ? (
        <div className={styles['no-results']}>
          <p>✨ "Our spells found no matching wizard or witch!"</p>
          <button onClick={onResetFilters}>🔙 Return to list </button>
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





