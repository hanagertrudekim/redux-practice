import Counter from "./components/Counter";
import ThemeChange from "./components/ThemeChange";
import Todo from "./components/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  h2{
    font-weight: 400;
    color: white;
    font-size: 64px;
    letter-spacing: 0.1em;
  }
`;

const Theme = styled.div`
  padding: 88px 15% 0 15%;
  height: 100vh;
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #094f8d 0%, #6eabfa 100%);"
      : "#272b33"};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

function App() {
  const theme = useSelector((state) => state.themeReducer);

  return (
    <Theme theme={theme}>
      <GlobalStyle />
      <ThemeChange />
      <div>
        <h2>COUNTER</h2>
        <Counter />
      </div>
      <div>
        <h2>TO DO LIST</h2>
        <Todo />
      </div>
    </Theme>
  );
}

export default App;
