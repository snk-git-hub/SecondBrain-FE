import { Dashboard } from './pages/dashbord';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

  </Routes>
   
  </BrowserRouter>


}