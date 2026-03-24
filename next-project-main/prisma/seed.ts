import { PrismaClient } from '@prisma/client'
import { hashSync } from "bcrypt"
import { categories, ingredients, products } from './constants'

const prisma = new PrismaClient()

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'daad@gmail.com',
                password: hashSync('11413411vanish', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'ADMIN',
                email: 'admin_yes@gmail.com',
                password: hashSync('132313313oh', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ]
    })
    await prisma.category.createMany({
        data: categories
    })
    await prisma.ingredient.createMany({
        data: ingredients
    })
    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Сырная',
            imageUrl: '/products/product_1.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(1,5)
            }
        }
    })
    const pizza2 = await prisma.product.create({
        data: {
            name: 'Ловэха',
            imageUrl: '/products/product_2.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5,10)
            }
        }
    })
    const pizza3 = await prisma.product.create({
        data: {
            name: 'Чик',
            imageUrl: '/products/product_3.avif',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10,40)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            {price: randomNumber(100, 900), size: 20, pizzaType: 1, productId: pizza1.id},
            {price: randomNumber(100, 900), size: 30, pizzaType: 1, productId: pizza1.id},
            {price: randomNumber(100, 900), size: 40, pizzaType: 1, productId: pizza1.id},
            {price: randomNumber(100, 900), size: 20, pizzaType: 2, productId: pizza2.id},
            {price: randomNumber(100, 900), size: 30, pizzaType: 2, productId: pizza2.id},
            {price: randomNumber(100, 900), size: 40, pizzaType: 2, productId: pizza2.id},
            {price: randomNumber(100, 900), size: 30, pizzaType: 3, productId: pizza3.id},
            {price: randomNumber(100, 900), size: 40, pizzaType: 3, productId: pizza3.id},
        ]
    })
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '111'
            },
            {
                userId: 2,
                totalAmount: 3,
                token: '1313'
            }
        ]
    })
    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [ {id: 1}, {id: 2}, {id: 3}, {id: 4} ]
            } // Не create, connect, что бы брались уже существующие позиции
        }
    })

} // Генерирует данные
// data: [user1, user2, user3]
// createMany() - для простых множественных вставок

// create() - для сложных объектов со связями
// Массивы - когда создаем много однотипных сущностей
// Одиночные объекты - когда нужны связи или индивидуальная обработка

async function down() {
    await prisma.cartItem.deleteMany()
    await prisma.cart.deleteMany({})
    await prisma.productItem.deleteMany({})
    await prisma.product.deleteMany()
    await prisma.ingredient.deleteMany()
    await prisma.category.deleteMany()
    await prisma.user.deleteMany({})


    // await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`
    // Прав нет
    // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
} // Очищает данные

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.log(e)
    }
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})