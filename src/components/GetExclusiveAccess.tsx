import { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/GetExclusiveAccess.module.css";
import EmailForm from "./EmailForm";
import { closeBtn } from "../utils/images";
const GetExclusiveAccess = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setOpen(true)}>
        Get exclusive access
      </button>
      {open && (
        <Modal open={open}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <img
                src={closeBtn}
                onClick={() => setOpen(false)}
                alt="Close Button"
              />
            </div>
            <h1>Sign up for exclusive access.</h1>
            <EmailForm />
            <p className={styles.message}>
              You’ll receive an email with an invite link to join.
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GetExclusiveAccess;
