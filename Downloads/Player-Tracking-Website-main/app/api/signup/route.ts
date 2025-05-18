export const dynamic = "force-dynamic";


import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "drizzle-orm";
import postgres from "postgres";
import bcrypt from "bcrypt";
import { config } from "dotenv";

// 加载环境变量
config({ path: ".env.local" });

// 连接数据库
const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  try {
    // 检查用户是否已存在
    const existingUsers = await db.execute(
      sql`SELECT * FROM users WHERE email = ${email}`
    ) as any[];

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 插入新用户
    await db.execute(
      sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`
    );

    return NextResponse.json({ message: "Signup successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
