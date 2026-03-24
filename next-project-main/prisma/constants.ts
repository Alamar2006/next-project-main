export const categories = [
    {name: 'Пиццы'},
    {name: 'Завтрак'},
    {name: 'Закуски'},
    {name: 'КЧе'},
    {name: 'Кчау'},
    {name: 'Напитки'},
    {name: 'Солевые'},
]

export const ingredients = [
    {name: 'Сырный батончик 1см', price: 1000, imageUrl:'/ingredients/ingredient_1.png'},
    {name: 'Лакомка', price: 11, imageUrl:'/ingredients/ingredient_2.png'},
    {name: 'Чечивичка', price: 4434, imageUrl:'/ingredients/ingredient_3.png'},
    {name: 'Да', price: 22, imageUrl:'/ingredients/ingredient_4.png'},
    {name: 'gg wp', price: 22, imageUrl:'/ingredients/ingredient_5.png'},
    {name: 'ne mogu', price: 22, imageUrl:'/ingredients/ingredient_6.png'},
    {name: 'O', price: 223, imageUrl:'/ingredients/ingredient_7.png'},
    {name: 'V', price: 221, imageUrl:'/ingredients/ingredient_8.png'},
    {name: 'Z', price: 221, imageUrl:'/ingredients/ingredient_9.png'},
    {name: 'Зараз террария/', price: 22435, imageUrl:'/ingredients/ingredient_10.png'},
    {name: 'Блят', price: 223, imageUrl:'/ingredients/ingredient_11.png'},
    {name: 'Кукич?', price: 2213, imageUrl:'/ingredients/ingredient_12.png'},
    {name: 'Мориарти', price: 22134, imageUrl:'/ingredients/ingredient_13.png'},
    {name: 'Индентини', price: 22134, imageUrl:'/ingredients/ingredient_14.png'},
    {name: 'Якобы', price: 2213, imageUrl:'/ingredients/ingredient_15.png'},
].map((obj, index) => ({id: index + 1, ...obj}))

export const products = [
    {name: 'Лук', imageUrl: '/products/product_1.avif', categoryId: 1},
    {name: 'Чеснок', imageUrl: '/products/product_2.avif', categoryId: 2},
    {name: 'Человек', imageUrl: '/products/product_3.avif', categoryId: 3},
    {name: 'Повидло', imageUrl: '/products/product_4.avif', categoryId: 4},
    {name: 'Майонез', imageUrl: '/products/product_5.avif', categoryId: 5},
    {name: 'Кучук', imageUrl: '/products/product_6.avif', categoryId: 6},
    {name: 'MAN', imageUrl: '/products/product_7.avif', categoryId: 7},
]
