// route - отлавливает запросы
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    const users = await prisma.user.findMany()

    return NextResponse.json(users)
    
}

export async function POST(req: NextRequest) {
    const data = await req.json() // получаем произвольный post запрос через postman, к примеру
    const user = await prisma.user.create({
        data
    }) // отрисовываем этот req запрос, который post
    return NextResponse.json(user)
}


