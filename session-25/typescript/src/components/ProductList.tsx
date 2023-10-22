import React, { useEffect, useState } from "react";
import { getProducts } from "../controllers/getProductController";
import Product from "./Product";

interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export default function ProductList() {
  const [data, setData]: any[] = useState<ProductInterface[]>([]);

  useEffect(() => {
    getProducts()
      .then((res: any) => setData(res.data))
      .catch((e: any) => console.log(e));
  }, []);
  return (
    <div>
      {data ? (
        "No hay productos"
      ) : (
        <div>
          {data.map(
            (p: ProductInterface, i:number): JSX.Element => (
              <Product
                key={i}
                image={p.image}
                title={p.title}
                price={p.price}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
