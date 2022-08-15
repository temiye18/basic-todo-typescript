class Todo {
  id: string;
  text: string;

  constructor(todoText: string, todoId: string) {
    this.text = todoText;
    this.id = todoId;
  }
}

export default Todo;
