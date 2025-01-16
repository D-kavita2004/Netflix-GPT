import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.scss'
import Login from './components/Login'

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        {/* <Route path="/Login" element={<Login/>}></Route> */}
        {/* <Route path='/Signup' element={<Signup/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;
