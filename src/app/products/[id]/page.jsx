import React from "react";
import { findProductById } from "@/actions";
import SingleProductDetails from "@/components/SingleProductDetails";

export default async function SingleProduct({ params }) {
  const product = await findProductById(params.id);
  console.log("PRODUCT: ", product);
  return (
    <>
      <div className="text-3xl p-2 bg-slate-500 text-white">
        {JSON.stringify(product, null, 4)}
      </div>
    </>
  );
}
