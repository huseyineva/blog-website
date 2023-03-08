import React from "react";
import styles from "./Button.module.css";

function Button({ name, style, onClick }) {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
