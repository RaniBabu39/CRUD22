import './App.css'
import { Route,Routes } from 'react-router-dom'
import Todo from './Pages/Todo'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Todo/>} ></Route>
    </Routes>
      
    </>
  )
}

export default App
