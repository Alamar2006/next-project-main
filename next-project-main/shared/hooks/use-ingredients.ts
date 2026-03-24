import React, {useState} from "react";
import {Ingredient} from "@prisma/client";
import {Api} from "@/shared/services/api-client";

export const useIngredients = () => {

  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    console.log("Ingredients loaded")
    async function getIngredients() {
      try {
        setLoading(true)
        const data = await Api.ingredients.getAll()
        setIngredients(data)
      } catch(error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getIngredients()
  }, [])

  return {ingredients, loading}
}

// const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([])
// data.map(res => ( {id: res.id, name: res.name} ) )