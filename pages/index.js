import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstName}>
        <h1>Danielle</h1>
      </div>
      <div>
        <h2 className={styles.lastName}>Desteucq - Roettger</h2>
      </div>
    </div>
  );
}
