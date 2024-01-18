export interface IButtonProps {
  onClick?: (event?: React.MouseEvent) => void;
  type?: "submit" | "button";
  children?: React.ReactNode;
}