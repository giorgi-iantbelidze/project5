"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.parent}>
      {products.map((product) => (
        <section key={product.id} className={styles.itemContainer}>
          <Image
            src={product.image}
            width={80}
            height={120}
            alt={product.title}
          />
          <h3 className={styles.titles}>{product.title}</h3>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.priceWrapper}>
            <p>${product.price}</p>
            <button
              className={styles.button1}
              onClick={() => router.push(`/product/details/${product.id}`)}
            >
              see details
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};
export default Product;
