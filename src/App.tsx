import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <Button type="button" onClick={clear} className="bg-zinc-800 text-gray-200 hover:bg-zinc-900"> Eliminar todas</Button>
      <Footer msg="Fran Gregori Tandazo" className="pt-24" />
    </>
  )
}

export default App
