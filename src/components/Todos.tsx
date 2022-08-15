import { FC } from "react";
import TodosItem from "./TodosItem";
import { useGlobalContext } from "../store/ContextProvider";
import classes from "./Todos.module.css";
const Todos: FC = () => {
  const todosCtx = useGlobalContext();

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodosItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
