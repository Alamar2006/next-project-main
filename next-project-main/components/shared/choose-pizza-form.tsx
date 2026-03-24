import {cn} from "@/shared/lib/utils";
import React from "react";
import {ProductImage} from "@/components/shared/product-image";
import {Button} from "@/components/ui";

interface Props {
  imageUrl: string
  name: string
  className?: string
  onClickAdd?: VoidFunction
}

export const ChoosePizzaForm: React.FC<Props> = (
  {
    name, imageUrl, className,onClickAdd
  }
) => {
  const textDetails  = '30 cm, традиционное тесто 30'
  const totalPrice = 350
  return (

    <div className={cn(className, 'flex w-full')} >
      {/*LEFT IMAGE*/}
      <div className="flex w-full items-center justify-center">
        <ProductImage imageUrl={imageUrl} size={20} />
      </div>

      <div className='w-[420px] bg-[#f7f6f5] p-8 flex flex-col'>
        <div>
          <h2 className='text-2xl font-extrabold mb-2'>{name}</h2>
          <p className='text-gray-400 text-sm mb-6'>{textDetails}</p>
        </div>

        <div>

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