import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Home.module.css"

export default function Home(props) {
  return (
    <div className={styles.background}>
      <h1>Home</h1>
      <SearchBar />
    </div>
  );
}