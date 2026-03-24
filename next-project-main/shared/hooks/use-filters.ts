
import {useSet} from "react-use";
import {useSearchParams} from "next/navigation";
import React from "react";


interface PriceProps {
  priceTo?: number
  priceFrom?: number
}

interface QueryFiltersProps extends PriceProps {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  sizes: Set<string>
  selectedIngredients: Set<string>
  pizzaTypes: Set<string>
  prices: PriceProps
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void
  setPizzaTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {

  const searchParams = useSearchParams() as unknown as Map<keyof QueryFiltersProps, string>

  // Фильтр ингридиентов
  const [selectedIngredients, {toggle: toggleIngredients}] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  )

  // Фильтр размера
  const [sizes, {toggle: toggleSizes}] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
  )

  // Фильтр типа пицц
  const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(
    searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
  ))

  // Фильтр цен
  const [prices, setPrices] = React.useState<PriceProps>({
    priceTo: Number(searchParams.get('priceTo')) || undefined,
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
  })

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    prices,
    pizzaTypes ,
    sizes,
    setPrices: updatePrice,
    setPizzaTypes: togglePizzaTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
    selectedIngredients

  }
}



// type IngredientItem = Pick<Ingredient, 'id' | 'name'>
//
// type ReturnProps = {
//   ingredients: IngredientItem[]
//   loading: boolean
//   selectedIngredients: Set<string>
//   onAddId: (id: string) => void
// }
