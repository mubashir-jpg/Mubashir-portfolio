
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Personal_Information from './Personal_Information'
import Contact from './Component/Contact'
import About from './Component/About'
import Porject from './Component/Project'
import Skill from './Component/Skill'
function App() {
  

  return (
    <>
        <Navbar/>
<Routes>
<Route path='/' element={<Personal_Information/>}/>
<Route path='/skill' element={<Skill/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/project' element={<Porject/>}/>
    </Routes>
    </>
  )
}

export default App
