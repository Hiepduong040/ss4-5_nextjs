"use client";
import React from "react";
interface Props {
  params: idProduct;
}
interface idProduct {
  idProduct: string;
}
export default function idProduct(props: Props) {
  const { params } = props;
  return (
    <div>
      <h3>Ex03</h3>
      <b>Product id: {params.idProduct}</b>
    </div>
  );
}
