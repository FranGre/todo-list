import Todo from "../interfaces/Todo"
import TodoRepository from "../repositories/TodoRepository.class"
import Button from "./Button"

import bin from '../assets/bin.svg'

export default function Todos() {
    const todoRepository = new TodoRepository()

    const todos = todoRepository.getAll()

    function handleClick(todo: Todo) {
        console.log(todo)
        todoRepository.removeById(todo.id)
    }

    return (
        <>
            {todos.length === 0 && <small>No hay tareas</small>}
            <ul className="rounded-lg border border-zinc-950">
                <li className="p-4 bg-cyan-700">Tareas</li>
                {todos.map(todo => (
                    <li key={todo.id} className="py-4 px-6 flex justify-between items-center">
                        {todo.title} | {todo.description}
                        <Button type="button" onClick={() => handleClick(todo)}
                            className="bg-red-600 hover:bg-red-800 ml-8">
                            <img src={bin} alt="delete" width="25"/>
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    )
}