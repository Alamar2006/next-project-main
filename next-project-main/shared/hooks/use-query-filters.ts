import React from "react";
import {Filters} from "@/shared/hooks/use-filters";
import qs from "qs";
import {useRouter, useSearchParams} from "next/navigation";



export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()
  const searchParams = useSearchParams()


  React.useEffect( () => {

    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes).sort(),
      sizes: Array.from(filters.sizes).sort(),
      ingredients: Array.from(filters.selectedIngredients).sort(),
    }
    const query = qs.stringify(params, {arrayFormat: 'comma'})
    const currQuery = searchParams.get(query)

    if(currQuery !== query) {
      router.replace(`?${query}`, {scroll: false})
    }
  }, [filters.prices, filters.pizzaTypes,filters.sizes,filters.selectedIngredients , router, searchParams])
}