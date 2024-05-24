import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to next JS Course 2024</h1>
      <hr />
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
      <h2>
        Alternative way using <code>useRouter</code>
      </h2>
    </main>
  );
}
