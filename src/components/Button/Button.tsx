import styles from "./Button.module.css";

type Props = {
    label: string;
    onClick(): void;
    primary?: boolean;
}

const Button = ({label, onClick, primary }: Props) => {
    return (
      <button className={primary ? styles.primary : styles.secondary} onClick={onClick}>{label}</button>
    );
  };
  
  export default Button;