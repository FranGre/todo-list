import { useEffect, useState } from "react"

import Todo from "../interfaces/Todo"
import TodoRepository from "../repositories/TodoRepository.class"
import Button from "./Button"

import bin from '../assets/bin.svg'

export default function Todos() {
    const [todos, setTodos] = useState<Todo[]>([])

    const todoRepository = new TodoRepository()

    useEffect(() => {
        setTodos(todoRepository.getAll())
    }, [])

    function changeStatus(todo: Todo) {
        todo.isDone = !todo.isDone
        setTodos(todos.map(item => {
            if(item.id === todo.id) return todo
            return item
        }))
        console.log(todo)
        todoRepository.update(todo)
    }

    function remove(todo: Todo) {
        console.log(todo)
        setTodos(todos.filter(item => item.id !== todo.id))
        todoRepository.removeById(todo.id)
    }

    if (!todos || todos.length === 0) {
        return (<small>No hay tareas</small>)
    }

    return (
        <>
            <ul className="rounded-lg border border-zinc-950">
                <li className="p-4 bg-cyan-700 rounded-t-lg ">Tareas</li>
                {todos.map(todo => (
                    <li key={todo.id} className="py-4 px-6 flex justify-between items-center">
                        {todo.title} | {todo.description}
                        <Button type="button" onClick={() => changeStatus(todo)}
                            className={todo.isDone ?
                                "text-slate-200 bg-cyan-500 hover:bg-cyan-600 ml-8" :
                                "text-slate-200 bg-zinc-900 hover:bg-zinc-950 ml-8"}>
                            {todo.isDone ? 'done' : 'not done'}
                            {/*<img src={bin} alt="change status" width="25" />*/}
                        </Button>
                        <Button type="button" onClick={() => remove(todo)}
                            className="bg-red-600 hover:bg-red-800 ml-8">
                            <img src={bin} alt="delete" width="24" />
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    )
}