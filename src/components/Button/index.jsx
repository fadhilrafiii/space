import "./Button.scss";

const Mode = {
  Outlined: "outlined",
  Filled: "filled",
};

const Theme = {
  Primary: "primary",
};

const Button = ({
  type = "",
  mode = "",
  theme = Theme.Primary,
  className = "",
  children,
  href,
  style,
}) => {
  if (type === "link") {
    return (
      <a
        href={href}
        className={`${mode ? "btn" : ""} link ${mode} ${theme} ${className}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`btn ${mode} ${theme} ${className}`} style={style}>
      {children}
    </button>
  );
};

Button.Mode = Mode;
Button.Theme = Theme;

export default Button;
