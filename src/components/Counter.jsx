import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { countDown, countUp } from "../store/countReducer";
import styled from "styled-components";

const CounterWrapper = styled.div`
  margin-top: 57px;
  margin-bottom: 106px;
  display: flex;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  background: rgba(255, 255, 255, 0.63);
  border-radius: 110px;
  height: 121px;
  width: 290px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Count = styled.span`
  height: 121px;
  width: 121px;
  background-color: white;
  border-radius: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 45px;
  color: #094f8d;
`;

const CountBtn = styled.button`
  color: white;
  border: none;
  background: none;
  font-size: 45px;
  width: 60px;
  cursor: pointer;
`;

export default function Counter() {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <BtnWrapper>
        <CountBtn onClick={() => dispatch(countUp())}>+</CountBtn>
        <Count>{count}</Count>
        <CountBtn onClick={() => dispatch(countDown())}>-</CountBtn>
      </BtnWrapper>
    </CounterWrapper>
  );
}
