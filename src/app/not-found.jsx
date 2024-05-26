import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>This page Not Found</h1>
      <Link href="/" className="text-blue-500 cursor-pointer">Back to Home</Link>
    </>
  );
}
