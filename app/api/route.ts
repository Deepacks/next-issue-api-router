import { NextResponse } from "next/server";
import { Redis } from "ioredis";

// This should not be pre-rendered because of the following reasons:
// 1. It's inside the api folder
// 2. It's exporting the async function GET
// 3. It's making use of the NextResponse

export async function GET() {
  const redis = new Redis();

  await redis.get("Meow");

  return NextResponse.json("ok");
}
