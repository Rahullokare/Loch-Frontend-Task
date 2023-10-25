import { bell } from "../utils/images";
import ColumnLayout from "./ColumnLayout";
import NotificationSlider from "./NotificationSlider";
import styles from "../styles/GetNotified.module.css";

const GetNotified = () => {
  return (
    <div>
      {" "}
      <ColumnLayout>
        <div className={styles.flex}>
          <img src={bell} alt="Bell Icon" title="Bell Icon" />
          <h4 className={styles.subHeading}>
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className={styles.bodyText}>
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className={styles.sliderContainer}>
          <NotificationSlider />
        </div>
      </ColumnLayout>
    </div>
  );
};

export default GetNotified;
