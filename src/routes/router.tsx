import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import Home from '../Pages/Home/index'
import Pagina_404 from '../Pages/NotFoundPage/index'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path="*" element={<Pagina_404/>}/>
    </Route>
   </Routes>
  </>
 )
}