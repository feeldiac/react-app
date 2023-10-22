import { useProducts } from "../hooks/useProducts";
import styles from "../styles/styles.module.css";

export const ProductCard = () => {
  const { counter, increaseBy } = useProducts();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffee Mug"
      />
      {/* <img className={styles.productImg} src={noImage} alt="No image" /> */}

      <span className={styles.productDescription}>Coffe Mug</span>

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button className={styles.buttonPlus} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
