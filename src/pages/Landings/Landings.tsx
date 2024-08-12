import { Routes, Route } from 'react-router-dom';

import { LandingLayout } from '../../layouts/landing';

import Home from './Home' 

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export const Landings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout  />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};