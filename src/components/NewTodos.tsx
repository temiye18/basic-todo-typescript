import { FC, useRef, FormEvent } from "react";
import { useGlobalContext } from "../store/ContextProvider";
import classes from "./NewTodos.module.css";

const NewTodos: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useGlobalContext();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
