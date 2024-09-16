import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white bg-opacity-30 py-10 sm:py-16 sm:pb-12 lg:py-20 lg:pb-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-principal uppercase">Ola Fintech</p>
            <h1 className="mt-4 text-4xl font-bold text-texto lg:mt-8 sm:text-6xl xl:text-7xl">Solicita tu crédito digital de forma segura.</h1>
            <p className="mt-4 text-base text-texto lg:mt-8 sm:text-xl">Te prestamos desde $150,000 hasta <b>$2,000,000</b> solo con tu <b>cédula</b>. Regístrate y recibe tu dinero en menos de 24 horas.</p>
            <Link to="/auth/registro" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white hover:text-black transition-all duration-200 bg-principal rounded-full lg:mt-12 hover:bg-secondario" role="button">
              Quiero mi crédito
              <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <p className="mt-5 text-gray-800">¿Ya tienes cuenta? <Link to="/auth/ingreso" className="text-principal transition-all duration-200 underline hover:cursor-pointer">Ingresa aquí</Link></p>
          </div>
          <div>
            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Ola Fintech - Crédito Digital" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;