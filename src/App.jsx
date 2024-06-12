import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTodo} from './features/todoSlice';
import List from './Components/list';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos)
  const [inp, setInp] = useState("");
  return (
    <>
    <div class=" flex justify-center mt-10">
      <div class="flex gap-5 ">
        <input
        class="placeholder:text-zinc-500 h-7 w-52 rounded outline outline-1 hover:outline-offset-2 bg-zinc-400 outline-gray-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        onChange={(e) => setInp(e.target.value)}
        placeholder='Enter Task'/>
        <button 
        class=" w-20 h-7 text-zinc-400 font-extralight outline outline-gray-400 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
        onClick={() => dispatch(addTodo(inp))}
        >
        Add Task
        </button>
      </div>   
    </div>
    <List/>
    </>
  )
}

export default App
