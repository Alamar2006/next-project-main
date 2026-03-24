import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage} from "@/components/shared";
import {GroupVariants} from "@/components/shared/group-variants";


const ProductPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;

  const product = await prisma.product.findFirst({where: {id: Number(id)}})

  if(!product) {
    return notFound()
  }

  return (
    <Container className="flex flex-col my-10" >
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <h1 className='font-extrabold mb-1' >{product.name}</h1>
          <p  className='text-gray-400' >YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs</p>
          
          <GroupVariants selectedValue='1' items={[
            {
              name: 'Маленькая',
              value: '1'
            },
            {
              name: 'Средняя',
              value: '2'
            },
            {
              name: 'Большая',
              value: '3'
            }
          ]}
                         />
        </div>
      </div>

    </Container>
  )
}

export default ProductPage