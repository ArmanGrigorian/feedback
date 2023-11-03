import { NextResponse } from "next/server";

const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url);

   const obj = Object.fromEntries(searchParams.entries())
   
	return NextResponse.json({ obj });
};

export { GET };
