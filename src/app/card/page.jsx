import Image from "next/image";
import styles from "./page.module.css";
import { FiTrash } from "react-icons/fi";
import Calc from "@/components/calc/page";
const fetchCartProducts = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();
  return result;
};
const Card = async () => {
  const response = await fetch(`https://fakestoreapi.com/carts/1`);
  const cart = await response.json();
  const data = [];
  for (let product of cart.products) {
    data.push(await fetchCartProducts(product.productId));
  }
  const total=data[0].price+data[1].price+data[2].price;
  return (
    <div className={styles.parent}>
      <div className={styles.child1}>
        <p>Shopping Cart</p>
      </div>
      <div className={styles.child2}>
        <div className={styles.cart}>
          <div className={styles.title}>
            <p>PRODUCT</p>
            <p>QUANTITY</p>
            <p>PRICE</p>
          </div>

          <div className={styles.cards}>
            {data.map((product) => (
              <div key={product.id} className={styles.divdiv}>
                <section className={styles.section}>
                  <div className={styles.image}>
                    <Image
                      src={product.image}
                      width={80}
                      height={120}
                      alt={product.title}
                    />
                    <div>{product.title}</div>
                  </div>
                  <div className={styles.quantity}>
                    <Calc />
                  </div>
                  <div className={styles.price}>
                    <p>${product.price}</p>
                    <p>
                      <FiTrash />
                    </p>
                  </div>
                </section>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.shop}>
          <div className={styles.order}>
            <p className={styles.p}>Order Summary</p>
            <div className={styles.shipping}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className={styles.shipping}>
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
          </div>
          <div className={styles.applay}>
            <div className={styles.coupon}>
              <p className={styles.coupons}>Have a coupon?</p>
              <p className={styles.couponcode}>Coupon Code</p>
              <div className={styles.applaybutton}>Applay</div>
            </div>
            <div className={styles.total}>
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <div className={styles.btn1}>
            <button className={styles.btn2}>BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
