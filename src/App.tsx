import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/UX/ScrollToTop';

import Landings from './pages/Landings';
import UserApp from './pages/UserApp/UserAppRoutes';
import Auth from './pages/Auth/AuthRoutes';
import Admin from './pages/Auth/AuthRoutes'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Landings />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/app/*" element={<UserApp />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;