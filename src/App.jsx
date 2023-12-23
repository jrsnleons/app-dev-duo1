import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomeView, LoginView, ErrorView, NotificationsView, ProfileView} from './views';
import {Protected} from './components/utils';
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
              <Route path="/home" element={<Protected><HomeView/></Protected>}/>
              <Route path="/notifications" element={<Protected><NotificationsView/></Protected>}/>
              <Route path="/profile" element={<Protected><ProfileView/></Protected>} />
              <Route path="*" element={<Protected><ErrorView/></Protected>}/>
            </Routes>
          </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
  )
}

export default App;