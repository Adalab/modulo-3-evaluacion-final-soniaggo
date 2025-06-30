import { useParams, Link } from "react-router-dom";
import styles from "../styles/DetailCharacters.module.scss";
import DefaultImage from "../images/defaultimages.png";
import gryffindorLogo from "../images/gryffindor.png";
import slytherinLogo from "../images/slytherin.png";
import ravenclawLogo from "../images/ravenclaw.png";
import hufflepuffLogo from "../images/hufflepuff.png";

function DetailCharacters({ ListCharactersDetail }) {
  const params = useParams();
  const actor = params.id;

  const characterDetail = ListCharactersDetail.find((item) => item.id === actor);

  const houseLogos = {
    Gryffindor: gryffindorLogo,
    Slytherin: slytherinLogo,
    Ravenclaw: ravenclawLogo,
    Hufflepuff: hufflepuffLogo,
  };

  const logoCasa = houseLogos[characterDetail.house];

  return (
    <div className={styles["detail-container"]}>
      <h1>Character Details</h1>
      <div className={styles["content-container"]}>
       
        <div className={styles["image-container"]}>
          <img
            src={characterDetail.image ? characterDetail.image : DefaultImage}
            alt={characterDetail.name}
          />
        </div>

       
        <div className={styles["text-container"]}>
          <h2> Name : {characterDetail.name}</h2>
          <h3> Especies : {characterDetail.species}</h3>
          <h3> Ancestry : {characterDetail.ancestry}</h3>
          <h3> House : {characterDetail.house}</h3>
          <h3> Actor : {characterDetail.actor}</h3>
          <h3> State: {characterDetail.alive ? "❤️ Vivo" : "💀 Muerto"}</h3>
          {logoCasa && (
            <img
              src={logoCasa}
              alt={`Escudo de ${characterDetail.house}`}
              className={styles["house-logo"]}
            />
          )}
        </div>
      </div>

      <Link to="/">
        <button>Return to list</button>
      </Link>
    </div>
  );
}

export default DetailCharacters;


