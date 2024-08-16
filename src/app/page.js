import React from 'react'
import ImageGeneratorPage from '../components/ImageGeneratorPage'
import Image from 'next/image'

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Generador de Imágenes con IA
        </h1>
        <p className="mt-3 text-2xl text-gray-600 mb-8">
          Transforma tus ideas en impresionantes imágenes en segundos.
        </p>
        <div className="w-full max-w-md">
          <Image
            src="https://images.pexels.com/photos/8849282/pexels-photo-8849282.jpeg"
            alt="Ejemplo de imagen generada"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="mt-5 text-lg text-gray-700">
          Nuestra IA avanzada te ayuda a crear imágenes únicas y personalizadas
          a partir de tus descripciones. ¡Prueba ahora y descubre el poder de la
          creatividad automatizada!
        </p>
      </main>
    </div>
  )
}

export default page
