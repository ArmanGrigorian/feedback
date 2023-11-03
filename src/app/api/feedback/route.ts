import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  const data: T_feedback = await request.json();

  const { name, email, message } = data;

	return NextResponse.json({name, email, message});
};

export { POST };
