'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { useIntersection } from 'react-use';
import { ProductCard } from './product-card'
import { useCategoryStore } from '@/shared/store/category';

interface Props {
    title: string
    items: Item[]
    categoryId: number
    className?: string
    listClassName?: string
}

interface Item {
    id: number
    name: string
    price: number
    imageUrl: string
}

export const ProductsGroupList:React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listClassName,
}) => {

    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = React.useRef<HTMLDivElement>(null) // где мы
    const intersection = useIntersection({current: intersectionRef.current as HTMLElement}, {
        threshold: 0.9,
    })
    
    React.useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
            
        }
        // intersection && intersection.intersectionRatio < 1
        // ? 'Obscured'
        // : 'Fully in view'
    },[categoryId, intersection?.isIntersecting, title, setActiveCategoryId])

  return (
    <div className={className} id={title} ref={intersectionRef } >
        <h1 className='font-extrabold mb-5'>{title}</h1>

        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)} >
            {
                items.map((item) => (
                    <ProductCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    />
                ))
            }
        </div>

    </div>
  )
}
