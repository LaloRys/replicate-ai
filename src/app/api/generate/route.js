const { NextResponse } = require('next/server')
import Replicate from 'replicate'

const api_key = process.env.REPLICATE_API_TOKEN

const replicate = new Replicate({
  auth: api_key,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    console.log('Running the model with prompt:', prompt);
    const model = 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b';
    const input = {
      width: 768,
      height: 768,
      prompt: prompt,
      refine: 'expert_ensemble_refiner',
      scheduler: 'K_EULER',
      lora_scale: 0.6,
      num_outputs: 1,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      negative_prompt: '',
      prompt_strength: 0.8,
      num_inference_steps: 25,
    };

    console.log('Using model: %s', model);
    console.log('With input: %O', input);

    console.log('Running...');
    const output = await replicate.run(model, { input });
    console.log('Done!', output);

    return NextResponse.json({
      message: 'Model ran successfully!',
      output: output,
    });
  } catch (error) {
    console.log('error: ', error);
    return NextResponse.json({ error: 'An error occurred while running the model' }, { status: 500 });
  }
}
