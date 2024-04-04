import { create } from 'zustand'
import Todo from '../interfaces/Todo'
import TodoRepository from '../repositories/TodoRepository.class'

interface TodoState {
    todos: Todo[]
    loadTodos: () => void
    save: (todo: Todo) => void
    update: (todo: Todo) => void
    remove: (id: string) => void
    clear: () => void
}

export default create<TodoState>()((set) => ({
    todos: [],
    
    loadTodos: () => {
        const repository = new TodoRepository()
        const todos = repository.getAll()
        set({ todos })
    },

    save: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

    update: (todo) => set((state) => ({
        todos: state.todos.map(item => {
            if (item.id === todo.id) return todo
            return item
        })
    })),

    remove: (id) => set((state) => ({
        todos: state.todos.filter(item => item.id !== id)
    })),

    clear: () => set({ todos: [] }),
}))