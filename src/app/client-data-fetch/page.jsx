"use client";

import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  ); // to test error , change the url to e.x  https://.../uesr
  // console.log(data?.users);
  if (error) {
    return <h1>error....</h1>;
  }
  if (isLoading) {
    return (
      <h3 className="text-3xl font-extrabold">
        Loading Users | Please waite....
      </h3>
    );
  }

    return (
      <>
        <div className="text-2xl bg-slate-500 text-white">
          <h1>Client side data fetching</h1>
          {data && data?.users && data?.users.length > 0
            ? data.users.map((user) => (
                <p key={user.id}>
                  <Link
                    href={`/client-data-fetch/${user.id}`}
                    className="my-2 border w-1/2 rounded-full px-2 cursor-pointer hover:text-3xl hover:text-slate-500 hover:bg-white"
                  >
                    {user.id} - {user.firstName} {user.lastName}
                  </Link>
                </p>
              ))
            : null}
        </div>
      </>
    );
}
