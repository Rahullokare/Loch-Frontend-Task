import { cohorts, eye } from "../utils/images";
import ColumnLayout from "./ColumnLayout";
import styles from "../styles/WatchTheWhale.module.css";

const WatchTheWhale = () => {
  return (
    <div>
      <ColumnLayout>
        <div className={styles.flexImg}>
          <img
            className={styles.dashboardImg}
            src={cohorts}
            alt="Dashboard Image"
            title="Dashboard Image"
          />
        </div>

        <div className={styles.flex}>
          <img src={eye} alt="Bell Icon" title="Bell Icon" />
          <h4 className={styles.subHeading}>
            Watch what the <br /> whales are doing
          </h4>
          <p className={styles.bodyText}>
            All whales are not equal. Know exactly what the <br /> whales
            impacting YOUR portfolio are doing.
          </p>
        </div>
      </ColumnLayout>
    </div>
  );
};

export default WatchTheWhale;
