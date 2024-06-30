const { NextResponse } = require("next/server")

export async function GET() {
    //extract params
    //query database
    //communite with other services
    try {
      const res = await fetch("https://jsonplaceholder.org/users");
      const data = await res.json();
      // console.log(data)
  
      // return new Response("Hello from back!!")
      return NextResponse.json(data);
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        message: "Error al obtener datos",
      });
    }
  }