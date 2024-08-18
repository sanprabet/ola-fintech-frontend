import { Link } from "react-router-dom"
import sideImage from "../../assets/loginSide.jpeg";

function Codigo() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative hidden lg:block lg:col-span-6">
          <img
            alt="Rocket Illustration"
            src={sideImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12">
          <div className="max-w-lg lg:max-w-md mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-texto sm:text-4xl">
              Verificación de seguridad
            </h1>
            <p className="mt-4 text-base text-texto">
              Digita el código de 6 dígitos que hemos enviado a tu celular 31777******.
            </p>
            <form className="mt-8 space-y-4">
              <div className="flex justify-center">
                <input
                  type="text"
                  maxLength="6"
                  className="w-48 h-12 border-2 border-principal rounded-md text-center text-xl font-bold tracking-widest text-principal focus:outline-none focus:border-principal focus:ring-principal"
                  placeholder="______"
                />
              </div>

              <Link
                type="submit"
                className="mt-6 w-full inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                to="/app/formulario"
              >
                Verificar código
              </Link>

              <p className="mt-4 text-base text-texto">
                <a href="#" className="text-principal hover:underline">
                  Reenviar código
                </a>
              </p>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Codigo;