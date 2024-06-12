import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function List() {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
  return (
    <>
    {todos.length > 0 && (
      <div id="list" class="grid justify-center  m-10 mx-44 min-h-5">
        {todos.map((todo)=>(
          <>
          <div class="flex items-center gap-5 rounded m-2 w-96 p-2 bg-zinc-700 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            👉
            <h1 class="p-1 w-80 text-zinc-400" key={todo.id}>{todo.text}</h1>
              <button class=" outline outline-1 rounded transition ease-in-out hover:-translate-y-1 hover:scale-90"
              onClick={()=>dispatch(removeTodo(todo.id))}
              >🗑️</button>
          </div>
          </>
          ))}
    </div>
    )}
    </>
  )
}

export default List