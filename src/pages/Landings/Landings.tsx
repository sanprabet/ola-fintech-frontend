import { Routes, Route } from 'react-router-dom';

import { LandingLayout } from '../../layouts/landing';

import Home from './Home' 

const TasasTarifas = () => <h2>Tasas y Tarifas</h2>;
const Nosotros = () => <h2>Nosotros</h2>;
const Requisitos = () => <h2>Nosotros</h2>;

export const Landings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout  />}>
        <Route index element={<Home />} />
        <Route path="tasasytarifas" element={<TasasTarifas />} />
        <Route path="requisitos" element={<Nosotros />} />
        <Route path="nosotros" element={<Requisitos />} />
      </Route>
    </Routes>
  );
};