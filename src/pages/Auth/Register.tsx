import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { UserRegisterForm } from "types/types";
import { useAuthHandlers } from '../../hooks/useAuthHandlers';

interface FormErrors {
  documentNumber: string;
  email: string;
  phoneNumber: string;
  password: string;
}

function Register() {
  const [registerData, setRegisterData] = useState<UserRegisterForm>({
    documentType: "Cédula de ciudadanía",
    documentNumber: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    documentNumber: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handlers = useAuthHandlers();

  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [dataConsentChecked, setDataConsentChecked] = useState(false);

  const navigate = useNavigate();

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {
      documentNumber: "",
      email: "",
      phoneNumber: "",
      password: "",
    };

    if (!/^\d{8,14}$/.test(registerData.documentNumber)) {
      newErrors.documentNumber = "El documento debe tener entre 8 y 14 dígitos";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "El correo electrónico es inválido. Por favor verificar";
      isValid = false;
    }

    if (!/^3\d{9}$/.test(registerData.phoneNumber)) {
      newErrors.phoneNumber = "El número debe tener exactamente 10 dígitos y comenzar con 3";
      isValid = false;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,}$/.test(registerData.password)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      if (name === "terms") {
        setTermsChecked((e.target as HTMLInputElement).checked);
      } else if (name === "dataConsent") {
        setDataConsentChecked((e.target as HTMLInputElement).checked);
      }
    } else {
      let newValue = value;
      if (name === "documentNumber") {
        newValue = value.replace(/\D/g, '').slice(0, 14);
      } else if (name === "phoneNumber") {
        newValue = value.replace(/\D/g, '').slice(0, 10);
      }
      setRegisterData(prevData => ({
        ...prevData,
        [name]: newValue
      }));
    }

    if (name in errors) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm() && termsChecked && dataConsentChecked) {
      handlers.createAccount(registerData);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = termsChecked && dataConsentChecked && !Object.values(errors).some(error => error !== "");

  return (
    <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 mt-12 xl:col-span-6">
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-texto leading-tight">
          Da el primer paso para tener tu credito, siempre disponible.
        </h1>
        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="documentType" className="block text-sm sm:text-lg font-medium text-texto">
                Tipo de documento
              </label>
              <select
                id="documentType"
                name="documentType"
                className="mt-1 sm:mt-2 block w-full rounded-md bg-white shadow-sm text-sm sm:text-lg h-10 sm:h-16 px-3 sm:px-4"
                value={registerData.documentType}
                onChange={handleChange}
              >
                <option>Cédula de ciudadanía</option>
                <option>Cédula de extranjería</option>
              </select>
            </div>

            <div>
              <label htmlFor="documentNumber" className="block text-sm sm:text-lg font-medium text-texto">
                Número de documento
              </label>
              <input
                type="text"
                id="documentNumber"
                name="documentNumber"
                className="mt-1 sm:mt-2 block w-full rounded-md text-sm sm:text-lg h-10 sm:h-16 px-3 sm:px-4"
                value={registerData.documentNumber}
                onChange={handleChange}
                maxLength={14}
              />
              {errors.documentNumber && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.documentNumber}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-texto">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 sm:mt-2 block w-full rounded-md bg-white shadow-sm focus:ring-principal text-sm sm:text-lg h-10 sm:h-16 px-3 sm:px-4"
              value={registerData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm sm:text-lg font-medium text-texto">
              Numero Celular
            </label>
            <div className="flex">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="block w-full rounded-md bg-white shadow-sm focus:ring-principal text-sm sm:text-lg h-10 sm:h-16 px-3 sm:px-4"
                value={registerData.phoneNumber}
                onChange={handleChange}
                maxLength={10}
              />
            </div>
            {errors.phoneNumber ?
              <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phoneNumber}</p>
              :
              <p className="mt-1 text-xs sm:text-sm text-gray-500">Debe estar registrado a tu nombre y tener mas de 2 años de antiguedad</p>
            }
          </div>

          <div>
            <label htmlFor="password" className="block text-sm sm:text-lg font-medium text-texto">
              Contraseña
            </label>
            <div className="mt-1 sm:mt-2 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block w-full rounded-md bg-white shadow-sm focus:ring-principal text-sm sm:text-lg h-10 sm:h-16 px-3 sm:px-4 pr-10"
                value={registerData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password}</p>
            )}
            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales como: ! @ # $ % ^ & * ( ) _ + - = [ ] { } ; : " ' \ | , . &lt; &gt; / ?
            </p>
          </div>

          <div className="flex items-center mt-0">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 sm:h-6 sm:w-6 rounded text-principal"
              checked={termsChecked}
              onChange={handleChange}
            />
            <label htmlFor="terms" className="ml-2 sm:ml-3 block text-sm sm:text-lg text-texto">
              Acepto los <a href="#" className="text-principal">Términos y condiciones.</a>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="dataConsent"
              name="dataConsent"
              type="checkbox"
              className="h-4 w-4 sm:h-6 sm:w-6 rounded text-principal focus:ring-principal"
              checked={dataConsentChecked}
              onChange={handleChange}
            />
            <label htmlFor="dataConsent" className="ml-2 sm:ml-3 block text-sm sm:text-lg text-texto">
              Autorizo el <a href="#" className="text-principal">Tratamiento de datos personales.</a>
            </label>
          </div>

          <div className="g-recaptcha" data-sitekey="your-site-key"></div>

          <button
            type="submit"
            className={`mt-4 sm:mt-6 w-full inline-flex justify-center py-3 sm:py-5 px-4 sm:px-8 rounded-full shadow-sm text-base sm:text-xl font-medium text-white ${
              isFormValid
                ? "bg-principal hover:bg-principalToneDown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-principal"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Crear mi cuenta
          </button>

          <p className="mt-6 sm:mt-8 text-sm sm:text-lg text-texto text-center">
            ¿Ya eres cliente? <Link to="/auth/ingreso" className="text-principal underline">Ingresa a tu cuenta</Link>.
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;