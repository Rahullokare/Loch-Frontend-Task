import styles from "../styles/LeftContainer.module.css";
import GetNotified from "./GetNotified";
import LeftContainerFooter from "./LeftContainerFooter";
import WatchTheWhale from "./WatchTheWhale";

const LeftContainer = () => {
  return (
    <div className={styles.container}>
      <GetNotified />
      <WatchTheWhale />
      <LeftContainerFooter />
    </div>
  );
};

export default LeftContainer;
