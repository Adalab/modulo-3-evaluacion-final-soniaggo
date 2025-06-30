import React from "react";
import styles from "../styles/FiltersCharacters.module.scss"; 

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
        <label htmlFor="search">Search by character name</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Name"
          value={PsearchName}
          onChange={handleName}
        />
      </div>

      <div className={styles["filter-item"]}>
        <label htmlFor="house">Filter by house</label>
        <select
          name="house"
          id="house"
          value={PfilterHouse}
          onChange={handleHouse}
        >
          <option value="">All</option>
          {Phouse.map((house, id) =>
            <option key={house} value={house}>{house}</option>
          )}
        </select>
      </div>
      <div className={styles["filter-item"]}>
  <label>Filter by state</label>  

  <div className={styles.radioGroup}> 
    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value="Alive"
        checked={selectedStatus === "Alive"}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>❤️ Alive</span>
    </label>

    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value="Dead"
        checked={selectedStatus === "Dead"}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>💀 Dead</span>
    </label>

    <label className={styles.radioOption}>
      <input
        type="radio"
        name="status"
        value=""
        checked={selectedStatus === ""}
        onChange={(e) => onStatusChange(e.target.value)}
      />
      <span>🔮 All</span>
    </label>
  </div>
</div>
 
    </form>
  );
}

export default FiltersCharacters;
