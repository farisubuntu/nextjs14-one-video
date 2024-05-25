"use client";

import { useEffect, useState } from "react";
// import Link from "next/link";
// useEffect, useState hooks
// swr, useSwr hook
// with loading state

export default function ClientSideDataFetching() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = apiResponse.json();
      if (result.users) {
        setUsers(result.users);
        setLoading(false);
        console.log("USERS:",users);
      }
    } catch (err) {
      console.log(err);
      setUsers([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return (
      <h3 className="text-3xl font-extrabold">
        Loading Users | Please waite....
      </h3>
    );
  }
  

  return (
    <>
      <div className="text-2xl bg-slate-500 text-white">
        {users && users.length > 0
          ? users.map((user) => (
              <p key={user.id}>
                {/* <Link
                  href={`/client-data-fetch/${user.id}`}
                  className="my-2 border w-1/2 rounded-full px-2 cursor-pointer hover:text-3xl hover:text-slate-500 hover:bg-white"
                > */}
                  {user.id} - {user.firstName} {user.lastName}
                {/* </Link> */}
              </p>
            ))
          : null}
      </div>
    </>
  );
}
