import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomeView, LoginView, SignUpView, DashboardView, ErrorView} from './views';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, darkTheme} from './themes';

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle/>
          <Routes>
            <Route path="/" element={<LoginView/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/signup" element={<SignUpView/>}/>
            <Route path="/home" element={<HomeView/>}/>
            <Route path="/dashboard" element={<DashboardView/>}/>
            <Route path="/error" element={<ErrorView/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  )
}

export default App;