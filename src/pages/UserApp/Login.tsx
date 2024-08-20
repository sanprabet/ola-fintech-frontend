import { Link } from "react-router-dom"
import sideImage from "../../assets/loginSide.jpeg";

function Login() {
  return (
    <section className="bg-fondo">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-lg lg:max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-texto sm:text-5xl">
              Ingresa a tu cuenta
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Digita tu número de documento para verificar tu cuenta.
            </p>
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="documentNumber" className="block text-base font-medium text-texto">
                  Número de documento.
                </label>
                <input
                  type="text"
                  id="documentNumber"
                  name="documentNumber"
                  className="mt-1 block w-full rounded-md shadow-sm focus:ring-principal sm:text-lg h-14 px-3"
                />
              </div>

              <div className="g-recaptcha mt-4" data-sitekey="your-site-key"></div>

              <p className="mt-4 text-sm text-gray-600">
                Elige cómo quieres recibir el código de verificación
              </p>

              <div className="flex space-x-4">
                <Link
                  type="button"
                  className="w-1/2 inline-flex justify-center py-4 rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                  to="/app/codigo"
                >
                  Whatsapp
                </Link>
                <Link
                  type="button"
                  className="w-1/2 inline-flex justify-center py-4 rounded-full shadow-sm text-base font-medium text-gray-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                  to="/app/codigo"
                >
                  Email
                </Link>
              </div>

              <p className="mt-6 text-base text-texto text-center">
                ¿No tienes una cuenta?{" "}
                <Link to="/app/registrate" className="text-principal underline">
                  Crea una ahora
                </Link>
                .
              </p>
            </form>
          </div>
        </main>

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

export default Login;