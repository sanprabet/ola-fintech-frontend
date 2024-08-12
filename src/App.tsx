// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landings } from './pages/Landings';
import { Login, Register } from './pages/App'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Landings />} />
        <Route path="/ingresar" element={<Login/>} />
        <Route path="/registrarse" element={<h1>Registrarse</h1>} />
        <Route path="/admin" element={<h1>Admin</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
