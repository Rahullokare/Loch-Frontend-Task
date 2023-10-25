import styles from "../styles/SliderCard.module.css";

interface SliderCardProps {
  icon: string;
  rightIcon: React.ReactNode;
  children: React.ReactNode;
  classname?: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
  icon,
  rightIcon,
  children,
  classname,
}) => {
  return (
    <div className={`${styles.card} ${classname}`}>
      <div className={styles.cardHeader}>
        <div className="icon">
          <img src={icon} alt="Bell Icon" title="Bell Icon" />
        </div>
        <div className="rightIcon">{rightIcon}</div>
      </div>
      {children}
    </div>
  );
};

export default SliderCard;
