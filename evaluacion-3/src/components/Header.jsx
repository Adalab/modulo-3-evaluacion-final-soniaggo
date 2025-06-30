import React from "react";
import styles from "../styles/Header.module.scss";  


function Header() {
  return (
    <header>
      { <h1 className={styles["header-title"]}>Harry Potter</h1> }
      
    </header>
  );
}

export default Header;

