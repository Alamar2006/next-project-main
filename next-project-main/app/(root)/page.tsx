import { Container, Filters, TopBar} from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import {prisma} from "@/prisma/prisma-client";

export default async function Home() {

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        }
      }
    }
  })

  return (
   <>
    <Container className="mt-10" >
      <h1 className="font-extrabold py-5" >Все заказы</h1>
    </Container>
    <TopBar/>
    
    <Container className="mt-10 pb-14" >
      <div className="flex gap-[80px]" >
        {/* Фильтрация */}
        <div className="w-[250px]" >
          <Filters/>
        </div>

        {/* Список Товаров */}
        <div className="flex-1" >
          <div className="flex flex-col gap-16" >
            {
              categories.map(category => (
                category.products.length > 0 && (
                  <ProductsGroupList
                  key={category.id}
                  categoryId={category.id}
                  title={category.name}
                  items={category.products.map(product => ({
                    ...product,
                    price: product.items[0]?.price ?? 0
                  }))}
                  />
              )
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  
   
   </>
  );
}
