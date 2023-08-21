import styles from "./Recipe.module.scss";
import food from "../assets/images/food.png";
const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={food} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex justify-content-center align-items-center`}
      >
        <h3>tunisian kafteji</h3>
      </div>
    </div>
  );
};

export default Recipe;
