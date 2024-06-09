import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Laout from './Layout/Laout'
import CatalogAnime from './Layout/Pages/CatalogAnime/CatalogAnime'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Laout/>}>
      <Route path = 'Catalog_Anime' element = {<CatalogAnime/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
