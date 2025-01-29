import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import AllProjects from './pages/AllProjects'
function App() {
 
  return (
    <>
 <Routes>
<Route path='/' element={<Home/>} />
<Route path='/allProjects' element={<AllProjects/>}/>
 </Routes>
    </>
  )
}

export default App
