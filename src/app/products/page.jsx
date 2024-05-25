import { getAllProducts } from "@/actions";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

export default async function AllProductPage() {
  const products = await getAllProducts();
  // console.log(products)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
