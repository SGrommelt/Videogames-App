import styles from "./Landing.module.css"
import { useNavigate } from "react-router-dom";

export default function Landing(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate ('/home');
  }

  return (
    <div className={styles.background}>
      <h1>Landing</h1>
      <button onClick={handleClick}>Entrar</button>
    </div>
  );
}