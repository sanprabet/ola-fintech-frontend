clea// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landings } from './pages/Landings';
import UserApp from './pages/UserApp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Landings />} />
        <Route path="/app/*" element={<UserApp />} />
        <Route path="/admin/*" element={<h1>Admin</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
