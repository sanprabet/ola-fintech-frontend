import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login.js';
import Register from './Register.js';
import Codigo from './Codigo.js';
import Form from './Form.js'

import AppLayout from '../../layouts/userApp/AppLayout';
import Inicio from './Inicio';
import Credito from './Credito'

import Perfil from './Perfil';
import EditarPerfil from './EditarPerfil';
import EditarOtros from './EditarOtros';
import EditarBanca from './EditarBanca';

function UserApp() {
  return (
    <Routes>
  
      <Route path="/*" element={<AppLayout />} >
        <Route index element={<Inicio />} />
        <Route path="creditos" element={<Credito />} />
        <Route path="salud" element={<h1>Seccion Salud Financiera</h1>} />
      </Route>

      <Route path="/cuenta/*" element={<AppLayout />}>
        <Route index element={<Perfil />} />
        <Route path="editarPerfil" element={<EditarPerfil/>} />
        <Route path="editarOtros" element={<EditarOtros/>} />
        <Route path="editarBanca" element={<EditarBanca/>} />
      </Route>
  
      <Route path="/registrate" element={<Register />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/codigo" element={<Codigo />} />
      <Route path="/formulario" element={<Form />} />
    </Routes> 
  );
}

export default UserApp;