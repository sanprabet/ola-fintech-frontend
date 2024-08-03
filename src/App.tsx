import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />

        <Route path="/ingresar" element={<h1>Ingresar a la cuenta</h1>} />
        <Route path="/registrarse" element={<h1>Registrarse</h1>} />

        <Route path="/admin" element={<h1>Admin</h1>} />

      </Routes>
    </Router>
  )
}

export default App
