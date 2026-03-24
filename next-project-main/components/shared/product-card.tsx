import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui'
import { Plus } from 'lucide-react'

interface Props {
    id: number
    name: string
    price: number
    className?: string
    imageUrl: string
}

export const ProductCard: React.FC<Props> = ({
    className,
    id,
    name,
    price,
    imageUrl
}) => {
  return (
    <div className={className} >
        <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]' >
            <Image width={256} height={256} src={imageUrl} alt={name} />
        </div>
        
        <h1 className='mb-1 mt-3 font-bold' >{name}</h1>
        <p className='text-sm text-gray-400 ' >
            Тут что-то и тут и тут и даже тут может быть да... конкретное такое перечисление Як динозавр 
        </p>
        </Link>
        <div className='flex justify-between items-center mt-4' >
            <span className='text-[20px]' >
                от <b>{price}</b>
            </span>

            <Button variant='secondary' className='text-base font-bold' >
                <Plus size={20} className='mr-1' />
                Add
            </Button>
        
        </div>
        
    </div>
  )
}