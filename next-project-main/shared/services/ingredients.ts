import { Ingredient } from "@prisma/client"
import { ApiRoutes } from "./constants"
import { AxiosInstance } from "./instance"



export const getAll = async (): Promise<Ingredient[]> => {
    return (await AxiosInstance.get(ApiRoutes.INGREDIENTS)).data
}

//api/ingredients