import { cn } from "@/shared/lib/utils"
import { Categories, Container, Popup } from "@/components/shared/index"
import React from "react"

interface Props {
    className?: string
}

export const TopBar: React.FC<Props> = ( {className} ) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)} >
            <Container className="flex items-center justify-between" >
                <Categories/>
                <Popup/>
            </Container>
        </div>
    )
}