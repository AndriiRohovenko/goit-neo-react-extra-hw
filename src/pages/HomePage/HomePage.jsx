import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.pageContent}>
        <h1 className={styles.hpTitle}>Save Your Contacts!</h1>
        <a href="/contacts">
          <button className={styles.mainBtn}>View Now</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
