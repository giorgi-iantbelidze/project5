"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
const Profile = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/users/3");
    const result = await response.json();
    setProducts(result);
    return result;
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className={styles.parent}>
      <h1 className={styles.about}>Profile</h1>
      <div className={styles.info}>
        <div className={styles.info1}>
          <p>Firstname</p>
          <p>Lastname</p>
          <p>Username</p>
          <p>Password</p>
          <p>Email</p>
          <p>Phone</p>
          <p>City</p>
          <p>street</p>
          <p>number</p>
          <p>zipcode</p>
          <p>Geolocation</p>
        </div>
        <div className={styles.info2}>
          <p>kevin</p>
          <p>ryan</p>
          <p>{products.username}</p>
          <p>{products.password}</p>
          <p>{products.email}</p>
          <p>{products.phone}</p>
          <p>cullman</p>
          <p>Frances Ct</p>
          <p>86</p>
          <p>29567-1452</p>
          <p>lat:40.3467 long:-30.1310</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
