import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { change } from "../store/themeReducer";

const ThemeBtn = styled.span`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20px;
  padding: 10px 14px;
  cursor: pointer;
  background-color: ${({ theme }) => (theme === "light" ? "black" : "#fff7ad")};
  border-radius: 10px;
  text-align: center;
`;
function ThemeChange() {
  const theme = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  return (
    <ThemeBtn
      theme={theme}
      onClick={() => {
        dispatch(change());
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </ThemeBtn>
  );
}
export default ThemeChange;
