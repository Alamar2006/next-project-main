import { ApiRoutes } from './constants';
import { Product } from "@prisma/client"
import { AxiosInstance } from "./instance"


export const search = async (query: string): Promise<Product[]> => {
    return (await AxiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: {query} })).data
    // Возвращаем только Product , без метаданных
}

// export const search = async(query: string) => {
//     const data = await AxiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {params: {query} } )
//     return data
//
// }


// {
//     data: Product[],        // То, что прислал сервер
//     status: 200,            // HTTP статус
//     statusText: 'OK',       // Текст статуса
//     headers: {},            // Заголовки ответа
//     config: {},             // Конфигурация запроса
//     request: {}             // Объект запроса
// }