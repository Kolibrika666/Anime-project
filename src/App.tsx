import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Laout from './Layout/Laout'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Laout/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
