import useLocalStorage from "./useLocalStorage";
import "./theme.css";
export function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleClick}>Change Theme</button>
      </div>
    </div>
  );
}

export default LightDarkMode;
