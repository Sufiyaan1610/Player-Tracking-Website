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
    // 查询数据库，防止 SQL 注入
    const queryResult = await db.execute(
      sql`SELECT * FROM users WHERE email = ${email}`
    ) as any[];

    if (queryResult.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = queryResult[0];

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // 登录成功
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
