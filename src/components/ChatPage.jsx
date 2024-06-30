'use client'
import React, { useState } from 'react'
import axios from 'axios'

function ChatPage() {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const generateText = async () => {
    setLoading(true)
    try {
      if (!prompt) return alert('Please enter a prompt')
      const result = await axios.post('/api/converse', { prompt })
      console.log('result: ', result)
      setResponse(result.data.response)
    } catch (error) {
      console.log('Error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handlePromptChange = (e) => {
    setPrompt(e.target.value)
  }

  return (
    <div className="flex flex-col items-center h-full">
      <div className="bg-white mt-6 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Generate Text</h1>
        <div className="flex flex-col space-y-4">
          <div className="w-full">
            <label htmlFor="text" className="block mb-2 text-gray-800">
              Enter prompt:
            </label>
            <textarea
              id="text"
              placeholder="Enter your prompt..."
              className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              rows={3}
              style={{ resize: 'none' }}
              onChange={handlePromptChange}
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
              onClick={generateText}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Generate Text
            </button>
          )}
        </div>
        <div className="mt-6 bg-gray-100 rounded-md shadow-md p-4">
          {response ? (
            <pre className="whitespace-pre-wrap text-gray-800">{response}</pre>
          ) : (
            <p className="text-gray-600">No response yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatPage
