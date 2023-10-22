import React from "react";

interface ProductProps {
  image: string;
  title: string;
  price: number;
}
export default function Product({ image, title, price }: ProductProps): JSX.Element {
  return (
    <div className="product">
      <img src={image} alt="img" />
      <h2>{title}</h2>
      <h2>{price}</h2>
    </div>
  );
}
