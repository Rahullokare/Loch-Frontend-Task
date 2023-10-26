import { useState } from "react";
import styles from "../styles/RightContainer.module.css";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // The email is valid, submit the form or take any other necessary action
      window.location.href = "https://app.loch.one/welcome";
    } else {
      // The email is not valid, set isValidEmail state to false
      setIsValidEmail(false);
    }
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValidEmail(true); // Reset validation error when the email input changes
          }}
          required
        />
        {!isValidEmail && (
          <p className={styles.error}>Please enter a valid email address.</p>
        )}

        <button type="submit" className={styles.submitBtn}>
          Get started
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
