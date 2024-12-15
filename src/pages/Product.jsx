import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';

export default function Settings() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.title}>Product Page</h1>
      <div className={styles.PageContent}>
        <h2 className={styles.WelcomeMessage}>Content of the Page</h2>
      </div>
    </div>
  );
}
