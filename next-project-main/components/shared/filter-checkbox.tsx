import React from "react"
import { Checkbox } from "../ui/index"

export interface FilterCheckboxProps {
    text: string
    value: string // checkbox
    endAdornment?: React.ReactNode // Material UI
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
    name?: string
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ( {text, value, endAdornment, onCheckedChange, checked, name} ) => {
    return (
        <div className="flex items-center gap-2" >
            <Checkbox
            onCheckedChange={onCheckedChange}
            checked={checked}
            value={value}
            className="rounded-[8px] w-6 h-6 cursor-pointer"
            id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(name)}-${String(value)}`} className="leading-none cursor-pointer flex-1" >
                {text} 
            </label>
            {endAdornment} 
        </div>
    )
}


// export const Filters: React.FC<Props> = ( {className} ) => {
//     return (
//         <div>
//             <h1 className="mb-5 font-bold size-3 ">Фильтрация</h1>
//             <div className="flex flex-col gap-4" >
//                 <FilterCheckbox text='Можно собирать' value='filter-1' />
//                 <FilterCheckbox text='Ты тут?' value='filter-2' />
//             </div>
//         </div>
//     )
// }