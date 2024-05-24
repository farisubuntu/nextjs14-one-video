```jsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleClick(path) {
    router.push(path);
  }
  return (
     <div className="text-2xl mx-3 border min-h-screen">
        <h2>
         using <code>useRouter</code>
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
```
