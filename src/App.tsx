import './App.css'
import FormTodo from './components/FormTodo'
import Todos from './components/Todos'
import TodoRepository from './repositories/TodoRepository.class'
import Button from './components/Button'
import Footer from './components/Footer'
import useTodosStore from './store/useTodosStore'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const todoRepository = new TodoRepository()

  const todosStore = useTodosStore()

  function clear() {
    if(todosStore.todos.length === 0){
      toast.error('No existen tareas', {
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
      return
    }

    todosStore.clear()
    todoRepository.clear()

    toast.success('Éxito al eliminar las tareas', {
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

  return (
    <>
      <h1 className='mb-16'>Todo List</h1>
      <ToastContainer />

      <Todos />
      <FormTodo />
      <Button type="button" onClick={clear} className="bg-zinc-800 text-gray-200 hover:bg-zinc-900"> Eliminar todas</Button>
      <Footer msg="Fran Gregori Tandazo" className="pt-24" />
    </>
  )
}

export default App
