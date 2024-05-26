import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Food Recipe App</h1>
      <hr />
      <Link
        href="/recipe-list"
        className="text-blue-500 cursor-pointer border rounded-full px-2 border-blue-500 my-4"
      >
        Recipe List
      </Link>
    </div>
  );
}
