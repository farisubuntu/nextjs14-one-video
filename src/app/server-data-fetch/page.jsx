import Link from "next/link";

async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (err) {
    throw new Error(err);
  }
  
}

export default async function ServerSideFetching() {
  const listOfUsers = await fetchListOfUsers();
  // console.log(listOfUsers);
  return (
    <div>
      <h1>Server side data fetching</h1>
      <ul className="text-2xl bg-slate-500 text-white">
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <Link href={`/server-data-fetch/${user.id}`}>
                <li
                  key={user.id}
                  className="my-2 border w-1/2 rounded-full px-2 cursor-pointer hover:text-3xl hover:text-slate-500 hover:bg-white"
                >
                  {user.id} - {user.firstName} {user.lastName}
                </li>
              </Link>
            ))
          : null}
      </ul>
    </div>
  );
}
