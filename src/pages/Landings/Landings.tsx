import { Routes, Route } from 'react-router-dom';

import { LandingLayout } from '../../layouts/Landings';

import Home from './Home' 
import TasasTarifas from './TasasTarifas'
import TratamientoDatosPersonales from './TextLandings/TratamientoDatosPersonales';
import Nosotros from './Nosotros'
import TerminosYCondiciones from "./TextLandings/TerminosYCondiciones"
import CreditosFisicos from './TextLandings/CreditosFisicos';
import Contrato from './Contrato';

const Landings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout  />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="tasasytarifas" element={<TasasTarifas />} />
        <Route path="terminosycondiciones" element={<TerminosYCondiciones />} />
        <Route path="tratamientosDatoPersonales" element={<TratamientoDatosPersonales />} />
        <Route path="creditosFisicos" element={<CreditosFisicos />} />
        <Route path="contrato" element={<Contrato endpointUrl={"linkurl"} />} />
      </Route>
    </Routes>
  );
};

export default Landings;