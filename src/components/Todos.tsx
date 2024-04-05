import { useEffect } from "react"
import Todo from "../interfaces/Todo"
import TodoRepository from "../repositories/TodoRepository.class"
import useTodosStore from "../store/useTodosStore"
import Button from "./Button"
import bin from '../assets/bin.svg'
import { toast, Slide } from 'react-toastify'

export default function Todos() {
    const todosStore = useTodosStore()

    const todoRepository = new TodoRepository()

    useEffect(() => {
        todosStore.loadTodos()
    }, [])

    function changeStatus(todo: Todo) {
        const todoUpdated = { ...todo }
        todoUpdated.isDone = !todoUpdated.isDone

        todosStore.update(todoUpdated)
        todoRepository.update(todoUpdated)
    }

    function remove(todo: Todo) {
        todosStore.remove(todo.id)
        todoRepository.remove(todo.id)
        toast.success('Éxito al eliminar la tarea', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          })
    }

    if (!todosStore.todos || todosStore.todos.length === 0) {
        return (<small>No hay tareas</small>)
    }

    return (
        <>
            <ul className="rounded-lg border border-zinc-950">
                <li className="p-4 bg-cyan-700 rounded-t-lg ">Tareas</li>
                {todosStore.todos.map(todo => (
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