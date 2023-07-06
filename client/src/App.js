import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './components/pages/login.js';
import Navigation from './components/pages/navigationbar.js';
import Register from './components/pages/register.js';
import Profile from './components/pages/profile.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Navigation />}>
          <Route path="login" element={<Loginform />}/>
          <Route path="register" element={<Register />}/>
          <Route path="profile" element={<Profile />}/>
        </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
