import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Detail } from '../Pages/Home/Detail/index'
import Home from '../Pages/Home'
import NewNote from '../Pages/NewNote'
import Pagina_404 from '../Pages/NotFoundPage'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/details/:id' element={<Detail/>}/>
     <Route path='/createNew' element={<NewNote/>}/>
    <Route path="*" element={<Pagina_404/>}/>
    </Route>
   </Routes>
  </>
 )
}