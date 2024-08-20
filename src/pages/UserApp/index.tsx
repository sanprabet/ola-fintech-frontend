import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Codigo from './Codigo.js';
import Form from './Form.js'
import Dashboard from './Dashboard.js';
import AppLayout from '../../layouts/userApp/AppLayout';

function UserApp() {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />} >
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/registrate" element={<Register />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/codigo" element={<Codigo />} />
      <Route path="/formulario" element={<Form />} />
    </Routes>
  );
}

export default UserApp;