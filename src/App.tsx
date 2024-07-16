import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Laout from './Layout/Laout'
import CatalogAnime from './Layout/Pages/CatalogAnime/CatalogAnime'
import StartPage from './Layout/Pages/StartPage/StartPage'
import RandomAnime from './Layout/Pages/RandomAnime/RandomAnime'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element = {<Laout/>}>
      <Route path = '/' element = {<StartPage/>}/>
      <Route path = 'Catalog_Anime' element = {<CatalogAnime/>}/>
      <Route path = 'Random_Anime' element = {<RandomAnime/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
