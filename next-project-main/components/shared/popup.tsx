import { cn } from "@/shared/lib/utils"
import { ArrowDownUp} from "lucide-react"
import React from "react"

interface Props {
    className?: string
}

export const Popup: React.FC<Props> = ( {className} ) => {
    return (
        <div className={cn("inline-flex items-center gap-1 bg-gray-50 rounded-2xl cursor-pointer", className)} >
            <ArrowDownUp size={16} strokeWidth={1.75} absoluteStrokeWidth/>
            <b>Сортировка:</b>
            <b className="text-primary" >рейтингу</b>
        </div>
    )
}