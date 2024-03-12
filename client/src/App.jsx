import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import RegPage from './Pages/RegPage/RegPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage></AuthPage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/reg' element={<RegPage></RegPage>}></Route>
      </Routes>
    </>
  )
}

export default App