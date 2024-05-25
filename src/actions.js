"use server";

import Products from "@/data/products.json";

export async function getAllProducts() {
  // return NextResponse.json(Products);
  return Products;
}

export async function findProductById(id) {
  const products = await getAllProducts();
  return products.find((p) => p.id == id);
}
