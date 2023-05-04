import React from "react";

/* Import the variables from its parent, App.js*/
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
   const inputTextHandler = (event) => {
      //   console.log(event.target.value);
      setInputText(event.target.value);
   };

   const sumbitTodoHandler = (event) => {
      // Preventing Refresh the page everytime we click the submit button
      event.preventDefault();
      setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
      setInputText("");
   };

   const statusHandler = (event) => {
      setStatus(event.target.value);
   };

   return (
      <form>
         <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
         <button className="todo-button" type="submit" onClick={sumbitTodoHandler}>
            <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;
