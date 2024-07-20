import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Laout from './Layout/Laout'
import CatalogAnime from './Layout/Pages/CatalogAnime/CatalogAnime'
import StartPage from './Layout/Pages/StartPage/StartPage'
import RandomAnime from './Layout/Pages/RandomAnime/RandomAnime'
import AnimePage from './Layout/Pages/AnimePages/AnimePage'
import Search from './Layout/Pages/SearchPage/Search'
import MyFavorite from './Layout/Pages/MyFavorite/MyFavorite'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element = {<Laout/>}>
      <Route path = '/' element = {<StartPage/>}/>
      <Route path = 'Catalog_Anime' element = {<CatalogAnime/>}/>
      <Route path = 'Random_Anime' element = {<RandomAnime/>}/>
      <Route path = 'Anime_Page' element = {<AnimePage/>}/>
      <Route path = 'Search_Page' element = {<Search/>}/>
      <Route path = 'My_Favorite_Anime' element = {<MyFavorite/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
