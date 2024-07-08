import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs"; // Ensure bcryptjs is properly imported
import User from "@/models/user.model";
import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/dbconfig/dbConfig";

connect(); // Ensure database connection is established

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // Validation
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    console.log("User exists");

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Check your credentials" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

    const response = NextResponse.json({ message: "Logged in successfully", success: true });

    response.cookies.set("token", token, {
      httpOnly: true
    });

    return response;
  } catch (error: any) {
    console.error("Error in login API:", error); // Log the error for debugging purposes
    return NextResponse.json({ error: "Internal server error" }, { status: 500 }); // Generic error message for internal server errors
  }
}
