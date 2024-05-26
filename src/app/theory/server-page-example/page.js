"use server";
async function fetchListOfUsers() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data?.products;
}

async function ServerActionsExample() {
  const products = await fetchListOfUsers();
  console.log(products);
  return (
    <>
      <div>
        <h1>Server actions example - server components </h1>
      </div>
    </>
  );
}

export default ServerActionsExample;
