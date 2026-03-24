'use client'
import React from "react";
import {cn} from "@/shared/lib/utils";

interface Variant {
  name: string
  value: string
  disabled?: boolean
}

interface Props {
  items: readonly Variant[]
  onClick?: (value: Variant['value']) => void
  className?: string
  value?: Variant['value']
}

export const GroupVariants: React.FC<Props> = ({items, onClick, className, value}) => {
  return (
    <div  className={cn('flex justify-between bg-[#F3F3F3] rounded-3xl p-1 select-none', className)} >
      {
        items.map((item) => (
          <button key={item.name} onClick={() => onClick?.(item.value)}
          className={cn('flex items-center justify-center cursor-pointer h-[30px] flex-1 px-5 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === value,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
          >
            {item.name}

          </button>
        ))
      }
    </div>
  )
}