import { useAppContext } from "../../contexts/AppContext";
import sytles from "./styles.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  filled?: boolean;
}

export const Button = ({ label, onClick, filled }: ButtonProps) => {
  const { tenant } = useAppContext();

  return (
    <div
      className={sytles.container}
      onClick={onClick}
      style={{
        color: filled ? "#fff" : tenant?.mainColor,
        borderColor: tenant?.mainColor,
        backgroundColor: filled ? tenant?.mainColor : 'transparent'
      }}
    >
      {label}
    </div>
  );
};
