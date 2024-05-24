"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleClick(path) {
    router.push(path);
  }
  return (
    <main className="flex justify-evenly p-24">
      <div className="text-2xl mx-3 border min-h-screen">
        <h1 className="text-3xl my-4">Welcome to next JS Course 2024</h1>

        <Link
          href="/products"
          className="border rounded-full px-3 py-2 bg-blue-500 text-2xl text-white"
        >
          Navigate to products page
        </Link>
        <Link
          href="/account"
          className="border rounded-full px-3 py-2 bg-blue-500 text-2xl text-white"
        >
          Navigate to Account Page
        </Link>
      </div>
      <div className="text-2xl mx-3 border min-h-screen">
        <h2>
          Alternative way using <code>useRouter</code>
        </h2>
        <button
          onClick={() => handleClick("products")}
          className="border rounded-full px-3 py-2 bg-blue-500 text-2xl text-white"
        >
          Navigate to products page
        </button>
        <button
          className="border rounded-full px-3 py-2 bg-blue-500 text-2xl text-white"
          onClick={() => handleClick("account")}
          // onClick={() => handleClick("/account")} also works
        >
          Navigate to Account page
        </button>
      </div>
    </main>
  );
}
