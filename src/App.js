// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  //state
  const [todoList, setTodoList] = useState([
    {id: 1, title: "todo one"},
    {id: 2, title: "todo akjsdlkajsd"},
    {id: 3, title: "todo three"},
  ]);

  const [title, setTitle] = useState("");

  function addTodo() {
    let newTodoList = todoList.slice()
    newTodoList.push({
      id: todoList.length,
      title: title
    })
    setTodoList(newTodoList)
    setTitle("")
  }

  function deleteTodo(ind) {
    let newTodoList = todoList.slice()
    newTodoList.splice(ind, 1)
    setTodoList(newTodoList)
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  return (
    <div className="w-100 h-screen flex bg-violet-400" >
      <div className="w-1/4 h-full text-sm font-medium py-10 px-4 bg-white">
        <button className="py-2 px-4 w-full font-medium text-left text-white bg-blue-700 rounded-t-lg border-b border-gray-200">
          home
        </button>
        <button className="py-2 px-4 w-full font-medium text-left border">
          profile
        </button>
        <button className="py-2 px-4 w-full font-medium text-left border">
          add
        </button>
        <button className="py-2 px-4 w-full font-medium text-left border">
          update
        </button>
      </div>
      <div className="w-3/4 h-full pt-10 flex flex-col flex-wrap content-center bg-slate-400">
        <div className="block p-6 w-4/5 m-1 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 text-center">Todo</h5>
          <p className="font-nomral text-gray-700 text-center">Simple todo application.</p>
          <div className="flex p-2 space-x-2">
            <input className="bg-gray-100 border-gray-300 text-gray-900 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="add todo here!"
             onChange={handleTitleChange}
             value={title}
             ></input>
            <button onClick={() => addTodo()} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/5 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">add</button>
          </div>
        </div>
        <div className="block p-6 w-4/5 m-1 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6 text-center rounded-l-lg">
                    todo
                </th>
                <th scope="col" class="py-3 px-6 text-center rounded-r-lg">
                    Action
                </th>
            </tr>
        </thead>
        { todoList.map( (todo, i) => {
          return (
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    { todo.title }
                </td>
                <td class="py-4 px-6 text-center">
                <button onClick={() => { deleteTodo(i) }} className="py-2 px-4 w-24 font-medium text-left text-white bg-red-500 rounded-lg text-center border-b border-gray-200">
                  delete
                </button>
                </td>
            </tr>
        </tbody>
          )
        } ) }
        
        </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
