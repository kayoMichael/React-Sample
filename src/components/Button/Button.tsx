import style from "./Button.module.css";

interface Properties {
  color?: "primary" | "secondary" | "danger" | "success";
  children: string;
  onClick: () => void;
}

const handleOnClick = () => {
  console.log("clicked");
};
function Button({ children, onClick, color = "primary" }: Properties) {
  return (
    <button
      type="button"
      className={[style.btn, style["btn-" + color]].join(" ")}
      onClick={() => {
        handleOnClick();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
