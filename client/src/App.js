import './App.css';
import Loginform from './components/login.js';
import Registerform from './components/register.js';
import Navigation from './components/navigationbar.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Loginform />
      <Registerform />      
    </div>
  );
}

export default App;
