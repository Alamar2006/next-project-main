import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '' //Большой обьект стандарт, где мы вытаскиваем query
// NextUrl для работы с url
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive'
            }
        }, // name: query, это не как includes, а строже
        take: 5,
    })

    return NextResponse.json(products)
}
