import styles from "../styles/TestimonialCard.module.css";

interface TestimonialCardTypes {
  personName?: string;
  jobTitle?: string;
  testimonialText?: string;
}

const TestimonialCard: React.FC<TestimonialCardTypes> = ({
  personName,
  jobTitle,
  testimonialText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.name}>{personName}</div>
        <div className={styles.jobTitle}>{jobTitle}</div>
      </div>

      <div className={styles.testimonialText}>{testimonialText}</div>
    </div>
  );
};

export default TestimonialCard;
