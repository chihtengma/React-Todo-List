import React from "react";
// Import Components
import Todo from "./Todo";

// Grab the variable 'todos' from parent
const TodoList = ({ todos, setTodos, filteredTodos }) => {
   return (
      <div className="todo-container">
         <ul className="todo-list">
            {/* Render All the todo task */}
            {filteredTodos.map((todo) => (
               // Passing the variables to todo.js
               <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
         </ul>
      </div>
   );
};

export default TodoList;
