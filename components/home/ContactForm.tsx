import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"; // Importa los componentes de modal de Next UI
import { FaUserPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Styles.css';

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
    <section>
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-1 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">
            Contacto
          </h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            ¡Nosotros te llamamos!
          </p>
          <p className="text-gray-300">
            ¡Nos encantaría saber de usted! Por favor complete el formulario a continuación.
          </p>
          
        </div>

        
        <div className="mt-12 mx-auto px-4 p-8 bg-gradient-to-r from-grass/20 to-poison/20 sm:max-w-lg sm:px-8 sm:rounded-xl">
          
          <form
            ref={refForm} 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 "
          >
            <div>
              <label className="font-medium text-white">
                Nombres completos
              </label>
              <input
              {...register('firstName', { required: true })}
              {...register('lastName', { required: true })}
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border focus:border-white shadow-sm rounded-lg"
                placeholder="Ej: Juan Pérez " 
              />
            </div>
            <div>
              <label className="font-medium text-white">
                Correo electrónico
              </label>
              <input
              {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-white outline-none border focus:border-white shadow-sm rounded-lg"
                placeholder="Ej: ejemplo@dominio.com" 
              />
                {errors.email && <span className="text-sm text-red-500">Por favor, introduce un correo electrónico válido</span>}
            </div>
            <div>
              <label className="font-medium text-white">
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
              <label className="font-medium text-white">
                Mensaje (Opcional)
              </label>
              <textarea  {...register('message')} required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-white outline-none border focus:border-white shadow-sm rounded-lg"></textarea>
            </div>
            <button
              className="w-full px-4 py-2 text-white font-medium bg-primaryblue hover:bg-blue-500 active:bg-gray-900 rounded-lg duration-150"
            >
              Enviar
            </button>
            <div className='-z-10 absolute inset-0 blur-[100px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

        
            
          </form>

        </div>

      </div>
      
    </section>
    
  );
}

export default ContactForm;
