'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"; // Importa los componentes de modal de Next UI
import { FaUserPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";


const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    console.log(data);
    setSending(true);
    const serviceID = "service_i88as6f";
    const templateID = "template_5xocaql";
    const apiKey = "g-1IPnSH_2rU34udz";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert('¡Mensaje Enviado!');
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
        setIsOpen(false); // Cerrar el modal después de enviar el formulario
      }
    }
  };

  return (
    <section id='contacto'>
      <div className="relative z-10 text-gray-600 sm:px-4 md:px-8" style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/contact.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black opacity-50">

        </div>
        {/* Resto de tu contenido */}
        <div className="relative z-10  text-gray-600 sm:px-4 md:px-8 mt-10" >
          <div className="max-w-lg space-y-1 px-4 sm:mx-auto sm:text-center sm:px-0 ">

            <h2 className="text-white dark:text-white text-4xl font-semibold sm:text-5xl pt-10">
              ¡Nosotros te llamamos!
            </h2>
            <p className="text-white dark:text-white">
              ¡Nos encantaría saber de usted! Por favor complete el formulario a continuación.
            </p>

          </div>


          <div className="mt-2 mx-auto px-4 p-8  sm:max-w-lg sm:px-8 sm:rounded-xl">

            <form
              ref={refForm}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 "
            >
              <div>
                <label className="font-medium text-white dark:text-white">
                  Nombres completos
                </label>
                <input
                  {...register('firstName', { required: true })}
                  {...register('lastName', { required: true })}
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border focus:border-white shadow-sm rounded-lg"
                  placeholder="Nombres y apellidos"
                />
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Correo electrónico
                </label>
                <input
                  {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border focus:border-white shadow-sm rounded-lg"
                  placeholder="Ej: ejemplo@gmail.com"
                />
                {errors.email && <span className="text-sm text-red-500">Por favor, introduce un correo electrónico válido</span>}
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Número de teléfono
                </label>
                <div className="relative mt-2">

                  <input
                    {...register('phoneNumber', { required: true, pattern: /^\d{9}$/ })}
                    type="number"
                    placeholder="999 999 999"
                    required
                    className="w-full  pr-3 py-2 appearance-none bg-white outline-none border focus:border-white shadow-sm rounded-lg"
                  />
                  {errors.phoneNumber && <span className="text-sm text-red-500">Por favor, introduce un número de teléfono válido (9 cifras)</span>}

                </div>
              </div>
              <div>
                <label className="font-medium text-white dark:text-white">
                  Mensaje (Opcional)
                </label>
                <textarea  {...register('message')} placeholder="Escribe tu mensaje aquí..." required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-white outline-none border focus:border-white shadow-sm rounded-lg"></textarea>
              </div>

              <Button color="primary" className="w-full px-4 py-2 ">
                Enviar
              </Button>


            </form>

          </div>

        </div>

      </div>


    </section>

  );
}

export default ContactForm;
