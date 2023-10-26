import SliderCard from "./SliderCard";
import { bell2 } from "../utils/images";
import styles from "../styles/NotificationSlider.module.css";

const NotificationSlider = () => {
  return (
    <div className={styles.container}>
      <SliderCard
        icon={bell2}
        rightIcon={<p className={styles.cardTextHeader}>Save</p>}
        classname={"bg-gradient"}
      >
        <p className={styles.cardText1}>
          We’ll be sending notifications to you here
        </p>
        <div className={styles.emailContainer}>hello@gmail.com</div>
      </SliderCard>
      <SliderCard
        icon={bell2}
        rightIcon={<p className={styles.cardTextHeader}>Save</p>}
        classname={"bg-gradient"}
      >
        <p className={styles.cardText1}>
          We’ll be sending notifications to you here
        </p>
        <div className={styles.emailContainer}>hello@gmail.com</div>
      </SliderCard>
    </div>
  );
};

export default NotificationSlider;
