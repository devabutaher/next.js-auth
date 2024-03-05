import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email } = await req.json();

    if (!process.env.JWT_SECRET) {
      console.log("process.env.JWT_SECRET:", process.env.JWT_SECRET);
      throw new Error("JWT_SECRET not found in env");
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    // Create JWT token
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("1d")
      .sign(secret);

    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
    });

    response.cookies.set({
      name: "auth_token",
      value: `Bearer ${token}`,
      secure: true,
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Authentication failed",
    });
  }
};
