import Todo from "../interfaces/Todo"

export default class TodoRepository {
    private table: string

    constructor() {
        this.table = 'todos'
    }

    getAll(): Todo[] {
        const storedTodos = localStorage.getItem(this.table);

        return storedTodos ? JSON.parse(storedTodos) : []
    }

    save(todo: Todo) {
        const todos: Todo[] = this.getAll()

        if (!todos) {
            localStorage.setItem(this.table, JSON.stringify([todo]))
            return
        }

        todos.push(todo)

        localStorage.setItem(this.table, JSON.stringify(todos))
    }

    update(todo: Todo) {
        let todos: Todo[] = this.getAll()

        todos = todos.map(item => {
            if (item.id === todo.id) return todo
            return item
        })

        localStorage.setItem(this.table, JSON.stringify(todos))
    }

    remove() {
        if (this.getAll()) {
            localStorage.removeItem(this.table)
        }
    }

    removeById(id: string) {
        const todos: Todo[] = this.getAll()
        const todosFiltered: Todo[] = todos.filter(todo => todo.id !== id)

        localStorage.setItem(this.table, JSON.stringify(todosFiltered))
    }
}