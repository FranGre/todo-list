import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Todo from "../interfaces/Todo"
import TodoRepository from "../repositories/TodoRepository.class"
import Button from "./Button"

const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
}).required()

export default function FormTodo() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({ resolver: yupResolver(schema) })

    const todoRepository = new TodoRepository()

    const onSubmit = (data) => {
        const todo: Todo = { id: crypto.randomUUID(), ...data, isDone: false }
        todoRepository.save(todo)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="py-12">

                <div className="block mb-7">
                    <label>Title</label>
                    <input {...register("title")} className="block mt-2 py-2 px-4 w-full border border-slate-800	" />
                    {errors.title && <small className="text-red-500">{errors.title.message}</small>}
                </div>

                <div className="block">
                    <label>Description</label>
                    <textarea {...register("description")} 
                    className="block mt-2 py-2 px-4 resize-none rounded-md w-full xs:resize xs:w-screen border border-slate-800	" />
                    {errors.description && <small className="text-red-500">{errors.description.message}</small>}
                </div>

                <Button type="submit" className="mt-7 bg-green-600 hover:bg-green-700 text-gray-200"> Save</Button>
            </form>
        </>
    )
}