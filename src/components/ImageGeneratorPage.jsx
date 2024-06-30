'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'

function ImageGeneratorPage() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchPing = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/ping')
      console.log('response: ', response)
      setData(response.data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log('error: ', error)
    } finally {
      console.log("hola");
    }
  }

  const generaImage = async () => {
    setLoading(true)
    try {
      if (!prompt) return alert('Please enter a prompt')
      const response = await axios.post('/api/generate', { prompt })
      // console.log('Response:', response.data)
      setData(response.data.output[0])
      // console.log('data: ', data)
    } catch (error) {
      console.log('Error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const ePrompt = (e) => {
    setPrompt(e.target.value)
    // console.log(prompt)
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div className="bg-white mt-8 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Generate Image
        </h1>
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <label htmlFor="text" className="block mb-2 text-gray-800">
              Enter text:
            </label>
            <textarea
              id="text"
              placeholder="Describe una imagen..."
              className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              rows={3}
              style={{ resize: 'none' }}
              onChange={ePrompt}
            />
          </div>
          {loading ? (
            <button
              type="button"
              className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
              disabled
            >
              Loading...
            </button>
          ) : (
            <button
              onClick={generaImage}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Generate Image
            </button>
          )}
        </div>
        <div className="mt-6 bg-gray-100 rounded-md shadow-md overflow-hidden">
          {data ? (
            <Image
              src={data}
              // src="/placeholder.svg"

              alt="Generated Image"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          ) : (
            <Image
              src="/placeholder.svg"
              alt="Generated Image"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
      
      {/* {data ? (
        <div className="bg-gray-800 p-4 mt-4 rounded-xl">
          <span>{data}</span>
        </div>
      ) : (
        <p className="p-4 mt-4 bg-slate-700 rounded-xl">Loading...</p>
      )} */}
    </div>
  )
}

export default ImageGeneratorPage
