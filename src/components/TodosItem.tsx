import { FC } from "react";
// import Todo from "../models/todo";
import classes from "./TodosItem.module.css";

const Todos: FC<{ text: string; onRemoveTodo: () => void }> = ({
  text,
  onRemoveTodo,
}) => {
  return (
    <>
      <li className={classes.item} onClick={onRemoveTodo}>
        {text}
      </li>
    </>
  );
};

export default Todos;
