import React, { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { add, remove, edit } from "../store/toDoReducer";
import styled from "styled-components";

const InputForm = styled.div`
  margin-top: 79px;
  margin-bottom: 18px;
  height: 59px;
  display: grid;
  justify-content: center;
  align-items: center;
  background: white;
  grid-template-columns: 1fr 59px;
  padding: 11px;
  border-radius: 5px;
`;

const InputTodo = styled.input`
  border: none;
  font-size: 24px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.47);
    letter-spacing: 0.1em;
  }
`;

const AddBtn = styled.button`
  width: 59px;
  height: 59px;
  background: #6ca3ea;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: white;
  font-size: 30px;
`;

const ToDo = styled.li`
  margin-bottom: 18px;
  height: 59px;
  background: white;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 11px;
  grid-template-columns: 1fr 59px 59px;
  gap: 5px;
  border-radius: 5px;
`;

const DeleteBtn = styled(AddBtn)`
  background: #cb4646;
  font-size: 20px;
`;

const EditBtn = styled(AddBtn)`
  background: green;
  font-size: 20px;
`;

const ToDoList = styled.ul`
  height: 200px;
  overflow-y: auto;
`;

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
      <InputForm>
        <InputTodo
          type="text"
          ref={inputRef}
          placeholder="Enter your next task"
        ></InputTodo>
        <AddBtn onClick={clickAdd}>+</AddBtn>
      </InputForm>
      <div>
        <ToDoList>
          {toDos.map((data) => (
            <ToDo>
              <span>{data.text}</span>
              <DeleteBtn onClick={() => dispatch(remove(data))}>X</DeleteBtn>
              <EditBtn onClick={() => dispatch(edit(data))}>edit</EditBtn>
            </ToDo>
          ))}
        </ToDoList>
      </div>
    </div>
  );
}
