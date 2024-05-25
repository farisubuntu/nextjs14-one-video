import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
      <div className="flex flex-col items-center justify-between border-blue-600 border-2 bg-white text-blue-600 mx-4 my-2 hover:bg-blue-600 hover:text-white cursor-pointer">
        <Image
          className="rounded-t-lg w-1/6 border-2 border-slate-500 py-4 full-image"
          src={`${product.images[0]}` || "https://dummyjson.com/image/150"}
          alt=""
          width={600}
          height={400}
        />

        <h5 className="mb-2 text-xl font-medium leading-tight">
          {product.title}
        </h5>
        <p className="mb-4 w-1/3 text-xl w-full text-green-600">
          {product.description}
        </p>
        <Link href={`/products/${product.id}`} className="w-1/4 cursor-pointer">
          <button
            type="button"
            className="px-6 py-2 text-3xl border-green-600 border-2 hover:bg-green-600 hover:text-white rounded-full"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            View
          </button>
        </Link>
      </div>
  );
}
