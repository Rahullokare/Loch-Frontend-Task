import styles from '../styles/ColumnLayout.module.css'

interface ColumnLayoutProps {
    classname?:string,
    children: React.ReactNode;
} 
const ColumnLayout:React.FC<ColumnLayoutProps> = ({
    children,
    classname
}) => {
  return (
    <div className={`${styles.container} ${classname}`}>
     {children}
    </div>
  )
}

export default ColumnLayout