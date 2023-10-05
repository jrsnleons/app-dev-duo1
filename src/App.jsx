import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomeView, LoginView, SignUpView} from './views';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/signup" element={<SignUpView/>}/>
          <Route path="/home" element={<HomeView/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;