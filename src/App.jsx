import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomeView, LoginView, DashboardView, ErrorView} from './views';
import { ThemeProvider } from 'styled-components';
import {GlobalStyle, darkTheme} from './themes';
import { AuthContextProvider } from './utils/contexts/';

function App() {
  return (
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle/>
            <Routes>
              <Route path="/" element={<LoginView/>}/>
              <Route path="/login" element={<LoginView/>}/>
              <Route path="/home" element={<HomeView/>}/>
              <Route path="/dashboard" element={<DashboardView/>}/>
              <Route path="*" element={<ErrorView/>}/>
            </Routes>
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App;