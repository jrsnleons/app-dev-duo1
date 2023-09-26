import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomeView, LoginView, SignUpView} from './views';
import {ThemeProvider} from './utils/providers/';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/signup" element={<SignUpView/>}/>
          <Route path="/home" element={<HomeView/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;