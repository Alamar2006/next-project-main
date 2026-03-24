import { cn } from "@/shared/lib/utils"
import React from "react"
import { Container } from './index'
import Image from "next/image"
import { Button } from "../ui/index"
import { ArrowRight, ShoppingCart, UserPlus } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "./search-input"

interface Props {
    className?: string,
}

export const Header: React.FC<Props> = ({className}) => {
    return (

        <header className={cn('border-b relative', className)}>
            <Container className="flex items-center justify-between py-2" >

                {/* Left part */}
                <Link href='/' className="flex-shrink-0"> 
                {/* Странный css */}
                    <div className='flex items-center justify-between py-8' >
                        <Image src='/favicon.ico' alt="logo"  width={28} height={28} />
                        <div>
                            <h1 className="text-2xl uppercase font-black" >Dodo pizza</h1>
                            <p className="text-sm  text-gray-400  leading-3" >Лучшие пиццы в мире!</p>
                        </div>
                    </div>
                </Link>

                <div  className="mx-10 flex-1" >
                    <SearchInput/>
                </div>

                {/* Right part */}

                <div className="flex items-center gap-3" >
                    <Button className="flex items-center gap-1 cursor-pointer" variant="outline" >
                    <UserPlus size={16} /> Login
                    </Button>
                <div>
                    <Button className="group relative cursor-pointer" >
                        <b>42 ₽</b>
                        <span className="h-full w-[1px] bg-white/40 mx-3" />
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0" >
                            <ShoppingCart className="h-4 w-4 relative" strokeWidth={2}/>
                            <b>3</b>
                        </div>
                        <ArrowRight className="absolute right-5 w-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>
                </div>
            </Container>

        </header>
    )
}