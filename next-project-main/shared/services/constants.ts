// export enum ApiRoutes {
//     SEARCH_PRODUCTS = 'products/search',
//     INGREDIENTS = 'products/ingredients'
// }

export const ApiRoutes = {
    SEARCH_PRODUCTS: 'products/search',
    INGREDIENTS: 'ingredients'
} as const

export type ApiRoutes = typeof ApiRoutes[keyof typeof ApiRoutes]