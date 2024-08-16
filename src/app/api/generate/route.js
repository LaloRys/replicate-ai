const { NextResponse } = require('next/server')
import Replicate from 'replicate'

const api_key = process.env.REPLICATE_API_TOKEN

const replicate = new Replicate({
  auth: api_key,
  // userAgent: 'https://www.npmjs.com/package/create-replicate'
})

export async function POST(request) {
  console.log("api_key", api_key);
  try {
    const { prompt } = await request.json();
 
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // console.log('Running the model with prompt:', prompt);
    const model = 'black-forest-labs/flux-schnell';
    const input = {
      prompt: "black forest gateau cake spelling out the words FLUX SCHNELL, tasty, food photography, dynamic shot",
    output_quality: 90
    };

    // console.log('Using model: %s', model);
    // console.log('With input: %O', input);

    console.log('Running...');
    console.log(prompt);
    const output = await replicate.run(model, { input });
    return NextResponse.json({
      message: 'Model ran successfully!',
      output: output,
    });
  } catch (error) {
    console.log('error: ', error);
    return NextResponse.json({ error: 'An error occurred while running the model' }, { status: 500 });
  }
}
