const todos = [
  { id: 1, text: "Take out trash", isCompleted: true },
  { id: 2, text: "Meeting with boss", isCompleted: true },
  { id: 3, text: "Dentist appt", isCompleted: false },
];

// Auto increment id
const nextTodoId = (todos) => {
    let maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

// Auto increment id
const nextTodoId2 = (todos) => {
  const maxId = todos[todos.length - 1].id;
  return maxId + 1;
};

// Add todo
const addTodo = (todos, text) => {
  return [...todos, { id: nextTodoId(todos), text, isCompleted: false }];
};
