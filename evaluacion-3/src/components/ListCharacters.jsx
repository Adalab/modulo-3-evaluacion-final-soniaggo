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
import defaultImage from "../images/default-image.jpg";
function ListCharacters({ PCharacters }) {
  return (
    <main>
      <ul>
        {PCharacters.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.actor}`}>
              <img  
                     src={item.image || defaultImage}
                     alt={item.name}
               />
              <h2>{item.name}</h2>
              <h3>{item.species}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListCharacters;
