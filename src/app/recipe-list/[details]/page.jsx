import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(id) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetailPage({ params }) {
  const { details } = params;
  console.log(details);
  const recipeDetails = await fetchRecipeDetails(details);
  console.log(recipeDetails);
  return (
    <>
      <RecipeDetailsItem recipeDetails={recipeDetails} />
    </>
  );
}
