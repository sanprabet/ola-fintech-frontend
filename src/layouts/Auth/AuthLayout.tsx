import React, { ReactNode } from 'react';
import { Outlet, Link } from 'react-router-dom';

import sideImage from "../../assets/loginSide.jpeg";
import logoImage from "../../assets/logo.png";

interface LandingLayoutProps {
  children?: ReactNode;
}

const AuthLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <section className="bg-fondo md:block min-h-screen flex flex-col items-center justify-center relative">
      {/* Logo container */}
      <div className="absolute top-4 left-4 z-10 sm:top-6 sm:left-6">
        <Link to="/">
          <img
            src={logoImage}
            alt="Company Logo"
            className="h-8 w-auto sm:h-10"
          />
        </Link>
      </div>

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