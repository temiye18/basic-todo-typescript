import Todos from "./components/Todos";
import NewTodos from "./components/NewTodos";
import TodosContextProvider from "./store/ContextProvider";

function App() {
  // console.log(todos);
  return (
    <TodosContextProvider>
      <NewTodos />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
