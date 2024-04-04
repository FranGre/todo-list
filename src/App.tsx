import './App.css'
import FormTodo from './components/FormTodo'
import Todos from './components/Todos'
import TodoRepository from './repositories/TodoRepository.class'
import Button from './components/Button'
import Footer from './components/Footer'
import useTodosStore from './store/useTodosStore'

function App() {

  const todoRepository = new TodoRepository()

  const todosStore = useTodosStore()

  function clear() {
    todosStore.clear()
    todoRepository.clear()
  }

  return (
    <>
      <h1>Todo List</h1>
      <Todos />
      <FormTodo />
      <Button type="button" onClick={clear} className="bg-zinc-800 text-gray-200 hover:bg-zinc-900"> Eliminar todas</Button>
      <Footer msg="Fran Gregori Tandazo" className="pt-24" />
    </>
  )
}

export default App
