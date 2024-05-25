## Server Side data fetching

```jsx
// src/app/server-data-fetch/page.jsx

async function fetchListOfUsers() {
  /*
  Notes:
  * By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server.
  * 'force-cache' is the default, unless a dynamic function such as cookies() is used, in which case it will default to no-store.
  *  use 'no-store' to opt out of caching for individual fetch requests (fetch data dynamically, on every request).
  * The no-cache option behaves the same way as no-store in Next.js.
  * fetch requests are not cached when:
   - Used inside a Server Action.
   - Used inside a Route Handler that uses the POST method.
  * set the cache lifetime of resource by seconds:
  
  fetch(`https://...`, { next: { revalidate: false | 0 | number } })

  false: always cache the resource
  0 : prevent resource from being cached
  number: cache the resource for the specified number of seconds.
 */
  try {
    const apiResponse = await fetch("https://dummyjson.com/users", {
      cache: "no-store",
    });
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
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <li
                key={user.id}
                className="text-2xl mx-3 borderbg-slate-800 text-white"
              >
                {user.id} - {user?.firstName} {user?.lastName}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
```


## Client Side data fetching

