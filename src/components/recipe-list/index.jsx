import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w3xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Recipes</h2>
      </div>
      <Link href={"/"} className="text-blue-500 cursor-pointer border-2 rounded-full px-2 border-blue-500">Back To All Recipes</Link>

      <div className="grid grid-cols-1 sm:grod-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link href={`/recipe-list/${recipe.id}`}>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:sacle-[1.1] transition-all">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover object-top"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {recipe.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center flex-wrap gap-2">
                    <p className="text-lg text-gray-600">
                      Rating: `{recipe.rating}
                    </p>
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">
                        {recipe.cuisine}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Link>
            ))
          : null}
      </div>
    </>
  );
}
