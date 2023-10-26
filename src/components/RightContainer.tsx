import styles from "../styles/RightContainer.module.css";
import EmailForm from "./EmailForm";

const RightContainer = () => {
  return (
    <div className={styles.container}>
      <h1>Sign up for exclusive access.</h1>
      <EmailForm />
      <p className={styles.message}>
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
};

export default RightContainer;
