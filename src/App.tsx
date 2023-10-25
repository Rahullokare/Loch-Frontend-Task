import styles from "./App.module.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}

export default App;
