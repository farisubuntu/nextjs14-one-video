"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


async function fetchListOfUsers() {
  try {
    // setLoading(true);
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (err) {
    console.log(err);
  }
}

export default function ClientSideDataFetching() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchListOfUsers().then((data) => {
      setUsers(data);
      console.log("data", data);
      setLoading(false);
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <h3 className="text-3xl font-extrabold">
        Loading Users | Please waite....
      </h3>
    );
  } else {
    return (
      <>
        <div className="text-2xl bg-slate-500 text-white">
          <h1>Client side data fetching</h1>
          {users && users.length > 0
            ? users.map((user) => (
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
}
