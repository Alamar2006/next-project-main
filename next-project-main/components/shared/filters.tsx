'use client'
import React from "react"
import {Input} from "../ui"
import {Slider} from "../ui/slider"
import CheckBoxFiltersGroup from "./checkbox-filters-group"
import {useQueryFilters, useFilters, useIngredients} from "@/shared/hooks";

interface Props {
    className?: string
}

export const Filters: React.FC<Props> = () => {
  const {ingredients, loading} = useIngredients()

  const filters = useFilters()

  useQueryFilters(filters)

    const items = ingredients.map(item => ({
        text: item.name,
        value: String(item.id)
    }))

  const updatePrices = (prices: number[] ) => {
    filters.setPrices('priceFrom', prices[0])
    filters.setPrices('priceTo', prices[1])
  }

    return (
      <div>
          <h1 className="mb-5 font-bold size-3 ">Фильтрация</h1>

        <CheckBoxFiltersGroup
          title='Тип теста'
          name='pizzaTypes'
          onClickCheckbox={filters.setPizzaTypes}
          selected={filters.pizzaTypes}
          className='mb-5'
          loading={loading}
          items={[
            {text: 'Тонкое', value: '1'},
            {text: 'Традиционное', value: '2'},
          ]}
        />

          <CheckBoxFiltersGroup
            title='Размеры'
            name='sizes'
            className="mb-5"
            onClickCheckbox={filters.setSizes}
            selected={filters.sizes}
            loading={loading}
            items={[
                {text: '20 см', value: '20'},
                {text: '30 см', value: '30'},
                {text: '40 см', value: '40'},
            ]}
          />

          {/* Price */}
          <div className="mt-5 border-y py-6 pb-7 border-y-neutral-100 ">
              <p className="mb-3 font-bold ">Price от и до:</p>
              <div className="flex gap-3 mb-5">
                  <Input
                    type="number"
                    placeholder="0"
                    min={0}
                    max={30000}
                    value={String(filters.prices.priceFrom)}
                    onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                  />
                  <Input
                    type="number"
                    placeholder="30000"
                    min={100}
                    max={30000}
                    value={String(filters.prices.priceTo)}
                    onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                  />
              </div>
              <Slider
                min={0}
                max={1000}
                step={10}
                value={[
                  filters.prices.priceFrom || 0,
                  filters.prices.priceTo || 1000
                ]}
                onValueChange={updatePrices}
              />

          </div>

          {/* List */}

          <CheckBoxFiltersGroup
            title="Курсовые"
            className="mt-5"
            name='ingredients'
            limit={5}
            defaultItems={
                items.slice(0, 6)
            }
            items={items}
            loading={loading}
            onClickCheckbox={filters.setSelectedIngredients}
            selected={filters.selectedIngredients}
          />

      </div>
    )
}



// EXAMPLE OF OLD CODE STYLE
//     const updatePrice = (name: keyof PriceProps, value: number) => {
//     if (name === 'priceFrom') {
//         setPrice({
//             priceFrom: value,
//             priceTo: prices.priceTo
//         })
//     } else {
//         setPrice({
//             priceFrom: prices.priceFrom,
//             priceTo: value
//         })
//     }
// }