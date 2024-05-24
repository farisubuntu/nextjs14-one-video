"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function CartPage() {
  const pathname = usePathname();
  console.log(pathname); // '/cart'

  const searchParams=useSearchParams();
  console.log(searchParams.get('search'),searchParams.get('randomvalue')); // 'product20' , 'abcde'

  return <h1>CartPage</h1>;
}
