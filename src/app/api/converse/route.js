const { NextResponse } = require('next/server')
import Replicate from 'replicate'

const api_key = process.env.REPLICATE_API_TOKEN

const replicate = new Replicate({
  auth: api_key
})

export async function POST(request) {
  const { prompt } = await request.json()
  console.log(prompt);

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
  }

  const input = {
    top_k: 0,
    top_p: 0.9,
    prompt: prompt,
    max_tokens: 512,
    min_tokens: 0,
    temperature: 0.6,
    system_prompt: 'You are a helpful assistant',
    length_penalty: 1,
    stop_sequences: ',',
    prompt_template:
      'system\n\nYou are a helpful assistant\nuser\n\n{prompt}\nassistant\n\n',
    presence_penalty: 1.15,
    log_performance_metrics: false
  }

  try {
    console.log('Running...');
    const response = await replicate.run('meta/meta-llama-3-70b-instruct', {
      input
    })
    return NextResponse.json({ response })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error generating response' })
  }
}
