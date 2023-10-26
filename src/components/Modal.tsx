import React from "react";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}
const Modal: React.FC<ModalProps> = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className={styles.overlayStyle}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;
