import {cn} from "@/shared/lib/utils";
import React from "react";
import {ProductImage} from "@/components/shared/product-image";
import {Button} from "@/components/ui";
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes
} from "@/shared/constants/pizza";
import {GroupVariants} from "@/components/shared/group-variants";
import {Ingredient} from "@prisma/client";

interface Props {
  imageUrl: string
  name: string
  className?: string
  ingredients: Ingredient[]
  items?: any[]
  onClickAdd?: VoidFunction
}

export const ChooseProductForm: React.FC<Props> = (
  {
    name, items, imageUrl, className, ingredients, onClickAdd
  }
) => {

  const [size, setSize] = React.useState<PizzaSize>(20)
  const [type, setType] = React.useState<PizzaType>(1)

  const textDetails  = '30 cm, традиционное тесто 30'
  const totalPrice = 350
  return (

    <div className={cn(className, 'flex w-full')} >
      {/*LEFT IMAGE*/}
      <div className="flex w-full items-center justify-center">
        <ProductImage imageUrl={imageUrl} size={size} />
      </div>

      <div className='w-[420px] bg-[#f7f6f5] p-8 flex flex-col'>
        <div>
          <h2 className='text-2xl font-extrabold mb-2'>{name}</h2>
          <p className='text-gray-400 text-sm mb-6'>{textDetails}</p>
        </div>

        <div className='flex flex-col gap-2' >
          <GroupVariants  value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)} items={
            pizzaSizes
          }/>

          <GroupVariants  value={String(type)} onClick={value => setType(Number(value) as PizzaType)} items={
            pizzaTypes
          }/>
        </div>

        <div className='grid grid-cols-3 gap-2' >

        </div>



        <div className='mt-auto' >
          <Button className='h-[55px] px-10 text-base font-semibold cursor-pointer rounded-[18px] w-full'  >
            Добавить в корзину за {totalPrice} руб
          </Button>
        </div>

      </div>


    </div>
  )
}