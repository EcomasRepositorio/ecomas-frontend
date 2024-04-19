"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/react';
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: '',
  password: '',
  role: true,
  token: '',
};

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/image/ECOMAS-HORIZONTAL.png' : '/image/ecomas.png';

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post('https://backend.cimade.edu.pe/api/v1/user/login', form);
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = 'student';
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === 'invalid_password') {
          setResErrors({ message: 'Credenciales incorrectas', errorContent: data.errorContent });
        } else if (data.error === 'user_not_found') {
          setResErrors({ message: 'Credenciales incorrectas', errorContent: data.errorContent });
        } else {
          setResErrors({ message: 'Credenciales incorrectas', errorContent: '' });
        }
      } else {
        setResErrors({ message: 'Error en el servidor', errorContent: '' });
      }
    }
  };

  return (
    <section className='' style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/bg-test4.png)", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="p-10  items-center">
        <div className="text-gray-600">
          <div className="rounded-3xl bg-white dark:bg-blackblue">
            <div className="md:px-0">
              <div className="p-4 md:p-12">
                <div className="text-center">
                  <Image
                    className="mx-auto mb-4"
                    src={imageSrc}
                    alt="logo"
                    width={300}
                    height={300}
                  />
                </div>
                <form>
                  <p className="text-gray-600 dark:text-white text-center mb-4">
                    Por favor ingresa tu correo y contraseña para ingresar:
                  </p>
                  {resErrors?.message && (
                    <p className="text-error text-medium font-bold text-[#c30e4d] text-center">{resErrors.message}</p>
                  )}
                  <div className="mb-4" data-te-input-wrapper-init>
                    <Input
                      type="email"
                      label="Correo electrónico"
                      className=""
                      onChange={(event) => handleFormData(event, "email")}
                    />
                  </div>
                  <div className="mb-4" data-te-input-wrapper-init>
                    <Input
                      type={isVisible ? "text" : "password"}
                      label="Contraseña"
                      className=""
                      autoComplete="on"
                      endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFormData(event, "password")}
                    />

                  </div>
                  <div className="">
                    <Button
                      className="w-full"
                      color='primary'
                      value="login"
                      onClick={() => onSubmit()}
                    >
                      Iniciar sesión
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login;