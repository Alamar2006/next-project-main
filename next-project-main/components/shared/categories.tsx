'use client'
import { cn } from "@/shared/lib/utils"
import { useCategoryStore } from "@/shared/store/category"
import React from "react"

interface Props {
    className?: string
}

const staff = [
    {id: 1, name: 'Пиццы'},
    {id: 2, name: 'Комбо'},
    {id: 3, name: 'Шо'},
    {id: 4, name: 'Паляница'},
    {id: 5, name: 'Тыдым'},
    {id: 6, name: 'Geroin'},
    {id: 7, name: 'дддддддддддддддд'},
]

export const Categories:React.FC<Props> = ({ className }) => {

    const categoryActiveId = useCategoryStore(state => state.activeId)

    return (
        <div className={cn("inline-flex gap-1 rounded-2xl bg-gray-50", className)} >
            {
                staff.map(({name, id}, index) => (
                    <a className={cn("flex items-center font-bold h-11 rounded-2xl px-5", 
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} 
                    href={`/#${name}`}
                    key={index}> 
                        <button className="cursor-pointer">{name}</button>
                    </a>
                ))
            }
        </div>      
    )
}

// S - Single Responsibility - Каждый компонент занимается своей логикой
// O - Open/Closed - Можно расширять компоненты с помощью пропсов, но так мы их не трогаем
// L - Liskov Substitution - ???
// I - Interface Segregation - ???
// D - Dependency Inversion - ???

