import styles from "../styles/RightContainer.module.css";
import React, { useState } from "react";

const RightContainer: React.FC = () => {
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
    <div className={styles.container}>
      <h1>Sign up for exclusive access.</h1>
      <form onSubmit={handleSubmit}>
        <input
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
        <button type="submit">Get started</button>
      </form>
      <p className={styles.message}>
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
};

export default RightContainer;
