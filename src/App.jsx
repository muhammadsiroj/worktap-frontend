import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import AuthPage from './pages/authPage'
import NotFound from './pages/notFound'
import Register from './components/auth/register'
import Login from './components/auth/login'
import 'react-toastify/dist/ReactToastify.css';
import Profil from './pages/Profil'
import Setting from './components/auth/setting'
import Fast from './components/main/fast'
import CreateWork from './pages/CreateWork/CreateWork'
import CreateOrderUser from './pages/createOrder/createOrderUser'
import StockPage from './pages/stock'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/profil/:id' element={<Profil/>}/>
        <Route path='/setting/:id' element={<Setting/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/fast/:id' element={<Fast/>}/>
        <Route path='/stock/:id' element={<StockPage/>}/>
        <Route path='/createorder/:id' element={<CreateOrderUser/>}/>
        <Route path='/creatework/:id' element={<CreateWork/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
