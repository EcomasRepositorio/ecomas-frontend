import DiplomadosNav from '@/components/diplomadosComponents/diplomadosNav'

export default function Main(
  { children }: { children: React.ReactNode }
) {

  {
    return (

      <div className="bg-white py-6 sm:py-8 lg:py-12 dark:bg-blackblue">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Nuestro Diplomados</h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Explora Nuestra Trayectoria Educativa: Descubre Nuestros Programas de Formación</p>
          </div>

          <DiplomadosNav />
        </div>
      </div>

    )
  }
}

