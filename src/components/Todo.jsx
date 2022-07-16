import React, { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { add, remove, edit } from "../store/toDoReducer";

export default function Todo() {
  const toDos = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const clickAdd = () => {
    dispatch(
      add({
        text: inputRef.current.value,
        id: Date.now(),
      })
    );
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={clickAdd}>Add</button>
      <div>
        <ul>
          {toDos.map((data) => (
            <li>
              {data.text}
              <button onClick={() => dispatch(remove(data))}>Del</button>
              <button onClick={() => dispatch(edit(data))}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
