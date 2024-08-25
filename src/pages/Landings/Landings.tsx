import { Routes, Route } from 'react-router-dom';

import { LandingLayout } from '../../layouts/landing';

import Home from './Home' 
import TasasTarifas from './TasasTarifas'
import Nosotros from './Nosotros'

export const Landings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout  />}>
        <Route index element={<Home />} />
        <Route path="tasasytarifas" element={<TasasTarifas />} />
        <Route path="requisitos" element={<Nosotros />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Route>
    </Routes>
  );
};