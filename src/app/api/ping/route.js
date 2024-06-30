const { NextResponse } = require("next/server")

export async function GET() {
    try {
      const time = new Date().toLocaleTimeString()
      // console.log("time: ", time);
      return NextResponse.json({ 
        pong: "pong",
        time: time
       })
    } catch (error) {
      console.error(error)
    }
  }