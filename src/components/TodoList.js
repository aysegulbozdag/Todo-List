import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    console.log("newTodos", newTodos);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    //todos'dan gelen itemları, döndürür.
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    //setTodos(prev => console.log('PREV:', prev))
  };
  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id); //Silinen item dışındaki tüm itemları listele
    setTodos(removeArr);
  };
  return (
    <>
      <h1>My Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
