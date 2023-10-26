import styles from "../styles/LeftContainerFooter.module.css";
import { testimonialData } from "../utils/TestimonialData";
import { lochLogo } from "../utils/images";
import TestimonialCard from "./TestimonialCard";
const LeftContainerFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.subheading}>Testimonials</h4>
        <div className={styles.horizontalLine}></div>
      </div>

      <div className={styles.flex}>
        <div className={styles.logo}>
          <img src={lochLogo} alt="Loch Logo" title="Loch Logo" />
        </div>
        {testimonialData.map((d: any, id: any) => {
          return (
            <TestimonialCard
              key={id}
              jobTitle={d.jobTitle}
              personName={d.personName}
              testimonialText={d.testimonialText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftContainerFooter;
