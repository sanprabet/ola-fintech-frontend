import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import sideImage from "../../assets/loginSide.jpeg";

interface LandingLayoutProps {
  children?: ReactNode;
}

const AuthLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <section className="bg-fondo md:block min-h-screen flex flex-col items-center justify-center">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">

        { children }
        <Outlet/>

        <aside className="relative hidden lg:block lg:col-span-5 xl:col-span-6">
          <img
            alt="Rocket Illustration"
            src={sideImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
      </div>
    </section>
  );
}

export default AuthLayout;