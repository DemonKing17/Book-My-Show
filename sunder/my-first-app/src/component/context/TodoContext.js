import React, { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();

const getTodos = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};
const INITIAL_STATE = getTodos();
export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodoAction = (title) => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: todos.length + 1, title },
    });
  };
  const removeTodoAction = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };
  return (
    <>
      <TodoContext.Provider value={{ todos, addTodoAction, removeTodoAction }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
