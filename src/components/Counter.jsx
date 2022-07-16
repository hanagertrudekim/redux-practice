import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { countDown, countUp } from "../store/countReducer";

export default function Counter() {
  const count = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(countUp())}>+</button>
      {count}
      <button onClick={() => dispatch(countDown())}>-</button>
    </div>
  );
}
