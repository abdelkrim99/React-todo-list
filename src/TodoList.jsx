import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos , toggleTodo , deleteTodo }) {

    return (
        <ul className='list'>
        {todos.length === 0 && "no todo list for now !"}
        {todos.map(todo => {
          return (
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo}  deleteTodo={deleteTodo} />
       ) })}
      </ul>
    )
}