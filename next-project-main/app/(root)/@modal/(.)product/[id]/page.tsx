import {prisma} from "@/prisma/prisma-client";
import {ChooseProductModal} from "@/components/shared";
import { notFound } from "next/navigation";




const ProductModalPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id)
    },
    include: {
      ingredients: true,
      items: true
    }
  })
  if (!product) {
    return notFound()
  }

  return <ChooseProductModal product={product} className={""} />
}

export default ProductModalPage