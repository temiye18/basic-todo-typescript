import { FC, useState, createContext, useContext } from "react";
import Todo from "../models/todo";

const TodosContext = createContext<{
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
}>({
  items: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodosContextProvider: FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      new Todo(todoText, Math.random().toString()),
    ]);
  };

  const removeTodoHandler = (todoId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export const useGlobalContext = () => useContext(TodosContext);
export default TodosContextProvider;
