import Image from "next/image";
import styles from "./page.module.css";
import Product from "./product/page";

export default function Home() {
  return (
    <div className={styles.parent}>
      <Product />
    </div>
  );
}
