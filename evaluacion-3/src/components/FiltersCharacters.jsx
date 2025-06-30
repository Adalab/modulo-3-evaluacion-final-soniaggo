import React from "react";
import styles from "../styles/FiltersCharacters.module.scss";  // Asegúrate de que la ruta del archivo sea correcta

function FiltersCharacters({ PsearchName, PsetSearchName, Phouse, PfilterHouse, PsetFilterHouse, selectedStatus,
  onStatusChange}) {

  const handleName = (ev) => {
    ev.preventDefault();
    PsetSearchName(ev.target.value);
  }

  const handleHouse = (ev) => {
    ev.preventDefault();
    PsetFilterHouse(ev.target.value);
  }

  return (
    <form className={styles["filters-container"]}>
      <div className={styles["filter-item"]}>
        <label htmlFor="search">Buscar por personaje</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Filtrar por nombre"
          value={PsearchName}
          onChange={handleName}
        />
      </div>

      <div className={styles["filter-item"]}>
        <label htmlFor="house">Filtrar por casa</label>
        <select
          name="house"
          id="house"
          value={PfilterHouse}
          onChange={handleHouse}
        >
          <option value="">Todas</option>
          {Phouse.map((house, id) =>
            <option key={house} value={house}>{house}</option>
          )}
        </select>
      </div>
      <div className={styles["filter-item"]}>
  <label>Filtrar por estado</label>  

  <div className={styles.radioGroup}> 
    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value="Alive"
        checked={selectedStatus === "Alive"}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>❤️ Vivo</span>
    </label>

    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value="Dead"
        checked={selectedStatus === "Dead"}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>💀 Muerto</span>
    </label>

    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value=""
        checked={selectedStatus === ""}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>🔮 Todos</span>
    </label>
  </div>
</div>
 
    </form>
  );
}

export default FiltersCharacters;
