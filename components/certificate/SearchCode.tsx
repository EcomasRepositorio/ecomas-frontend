import React, { useState, FormEvent } from 'react'
import { URL } from '@/components/utils/format/tokenConfig';
import axios from 'axios'
import { SearchCodeProps, StudentCode } from '../../interface/interface';
import Modal from '../share/Modal';
import { Button } from '@nextui-org/react';

const SearchName: React.FC<SearchCodeProps> = ({ onSearchCode }) => {

  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [open, setOpen] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 'onChange ejecutado');
    setQueryValue(event.target.value);
    setSearchType(event.target.value);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchCode = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`
      console.log(apiUrl)
      const res = await axios
        .get(`${URL()}/student/code/${value.trim()}/type/${searchType}`,
        );
      console.log(res)
      setStudentData(res.data);
      onSearchCode(res.data);
      if (queryValue.trim() !== '') {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error: Codigo invalido", error);
      openErrorModal();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    { imgSrc: '/icons/organizadopor.svg', label: 'Organizado por:', value: studentData?.institute },
    { imgSrc: '/icons/otorgado.svg', label: 'Otorgado a:', value: studentData?.name },
    { imgSrc: '/icons/nom_evento.svg', label: 'Nombre del evento:', value: studentData?.activityAcademy },
    { imgSrc: '/icons/creditos_horas.svg', label: 'Creditos/Horas:', value: studentData?.hour },
    { imgSrc: '/icons/fecha_emision.svg', label: 'Fecha de emisión:', value: studentData?.date },
  ];
  return (
    <div className="">

      <form onSubmit={searchCode} className="w-full ">

        <div className="flex items-center">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className="  font-semibold  text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black"
              placeholder={`Buscar por código ${searchType === 'code' ? 'código' : ''}`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div>
            <Button
              color='primary'
              type="submit"
              className="ml-auto" // Añade margen izquierdo
              onClick={() => setOpen(true)}>
              Buscar
            </Button>
          </div>

        </div>
      </form>



      {loading && <p>Cargando...</p>}
      {studentData && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className='flex justify-center mb-4'>
            <img src={'/certificate/logo_unp.png'} className="lg:w-32 lg:h-32 w-28 h-28 object-contain" />
            <img src={'/certificate/logo_cimade.png'} className="lg:w-32 lg:h-32 w-28 h-28 object-contain" />
            <img src={'/certificate/logo_cip_tacna.png'} className="lg:w-32 lg:h-32 w-28 h-28 object-contain " />
          </div>
          <div className="max-w-md mx-auto p-6 bg-white rounded-md">
            {tableRows.map((row, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center text-gray-100 text-sm p-1 lg:ml-5 ml-0 lg:w-80 w-full rounded-lg bg-slate-600 font-semibold">
                  {row.imgSrc && <img src={row.imgSrc} alt={row.label} className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1" />}
                  <div className='flex-1 text-center'>
                    {row.label}
                  </div>
                </div>
                <div className="text-gray-600 mt-3 mb-5 text-sm font-semibold">{row.value}</div>
              </div>
            ))}
          </div>
        </Modal>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="border-2 p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-600 mb-4">Código incorrecto</h2>
          <h3 className="text-sm font-semibold text-gray-600">El código que ingresaste no se encuentra en nuestra base de datos.</h3>
        </div>
      </Modal>
    </div>
  )
}

export default SearchName;