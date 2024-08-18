import { Link } from "react-router-dom"
import sideImage from "../../assets/loginSide.jpeg";
import isologotipo from "../../assets/logo-nombre.png"

function Register() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative hidden lg:block lg:col-span-5 xl:col-span-6">
          <img
            alt="Rocket Illustration"
            src={sideImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-lg lg:max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-texto sm:text-4xl">
              Da el primer paso para tener tu credito, siempre disponible.
            </h1>
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div>
                  <label htmlFor="documentType" className="block text-base font-medium text-texto">
                    Tipo de documento.
                  </label>
                  <select
                    id="documentType"
                    name="documentType"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm sm:text-base h-14 px-3"
                  >
                    <option>Seleccione una opción.</option>
                    <option>Cédula de ciudadanía</option>
                    <option>Cédula de extranjería</option>
                    <option>Pasaporte</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="documentNumber" className="block text-base font-medium text-texto">
                    Número de documento.
                  </label>
                  <input
                    type="text"
                    id="documentNumber"
                    name="documentNumber"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-texto">
                  Correo electrónico.
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-base font-medium text-texto">
                  Número de WhatsApp
                </label>
                <div className="flex">
                  <select
                    id="whatsappCountryCode"
                    name="whatsappCountryCode"
                    className="mr-2 block rounded-md border border-gray-300 bg-white shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                  >
                    <option>COL (+57)</option>
                  </select>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    className="block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-principal focus:ring-principal sm:text-base h-14 px-3"
                  />
                </div>
              </div>

              <div className="flex items-center mt-0">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-6 w-6 rounded border-gray-300 text-principal focus:ring-principal"
                />
                <label htmlFor="terms" className="ml-2 block text-base text-texto">
                  Acepto los <a href="#" className="text-principal">Términos y condiciones.</a>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="dataConsent"
                  name="dataConsent"
                  type="checkbox"
                  className="h-6 w-6 rounded border-gray-300 text-principal focus:ring-principal"
                />
                <label htmlFor="dataConsent" className="ml-2 block text-base text-texto">
                  Autorizo el <a href="#" className="text-principal">Tratamiento de datos personales.</a>
                </label>
              </div>

              <div className="g-recaptcha" data-sitekey="your-site-key"></div>

              <Link
                type="submit"
                className="mt-4 w-full inline-flex justify-center py-4 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-principal hover:bg-secondario hover:text-texto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                to="/app/codigo"
              >
                Empezar
              </Link>

              <p className="mt-6 text-base text-texto text-center">
                ¿Ya eres cliente? <Link to="/app/ingresar" className="text-principal underline">Ingresa a tu cuenta</Link>.
              </p>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Register;