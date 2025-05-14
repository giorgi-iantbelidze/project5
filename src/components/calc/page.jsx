"use client";
import { useState } from "react";
import styles from "./page.module.css";

const Calc = () => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <button
        className={styles.minus}
        onClick={() =>
          setNumber(() => {
            if (number === 1) {
              return 1;
            } else {
              return number - 1;
            }
          })
        }
      >
        -
      </button>
      <button className={styles.number}>{number}</button>

      <button
        className={styles.plus}
        onClick={() =>
          setNumber(() => {
            return number + 1;
          })
        }
      >
        +
      </button>
    </>
  );
};
export default Calc;
