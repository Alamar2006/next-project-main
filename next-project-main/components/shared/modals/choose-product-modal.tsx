'use client'
import React from "react";
import {cn} from "@/shared/lib/utils";
import {DialogContent, Dialog, DialogTitle} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";
import {ChoosePizzaForm, ChooseProductForm} from "@/components/shared";
import {ProductWithRelations} from "@/@types/prisma";


interface Props {
  product: ProductWithRelations;
  className?: string
}


export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0]?.pizzaType)

  return (
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()} >

        <DialogContent aria-describedby={undefined} className={cn("p-0 w-[1000px] max-w-none min-h-[520px] bg-white overflow-hidden rounded-2xl", className)} >

          <DialogTitle className="hidden" />

          {
            isPizzaForm ? <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients}/> : <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name}/>
          }

        </DialogContent>

      </Dialog>
  )
}