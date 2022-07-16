import Counter from "./components/Counter";
import ThemeChange from "./components/ThemeChange";
import Todo from "./components/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

const Theme = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

function App() {
  const theme = useSelector((state) => state.themeReducer);

  return (
    <Theme theme={theme}>
      <GlobalStyle />
      <ThemeChange />
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
      <div>
        <h2>to do list</h2>
        <Todo />
      </div>
    </Theme>
  );
}

export default App;
