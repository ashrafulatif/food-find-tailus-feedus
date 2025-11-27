"use client";
import React from "react";
import RecipeCategoryCard from "../Recipes/RecipeCategoryCard";
import { useRouter } from "next/navigation";

const RecipeCategory = () => {
  const categories = [
    {
      title: "Italian Cuisine",
      description:
        "Authentic Italian dishes with rich flavors and traditional ingredients",
      imageUrl: "/images/italian-cuisine.jpg",
      recipeCount: 25,
    },
    {
      title: "Asian Fusion",
      description:
        "Modern takes on classic Asian dishes with bold spices and fresh ingredients",
      imageUrl: "/images/asian-fusion.jpg",
      recipeCount: 18,
    },
    {
      title: "Healthy Bowls",
      description:
        "Nutritious and colorful bowl recipes packed with vitamins and proteins",
      imageUrl: "/images/healthy-bowls.jpg",
      recipeCount: 32,
    },
    {
      title: "Desserts",
      description: "Sweet treats and decadent desserts for every occasion",
      imageUrl: "/images/desserts.jpg",
      recipeCount: 15,
    },
    {
      title: "Quick Meals",
      description: "Fast and easy recipes for busy weeknight dinners",
      imageUrl: "/images/quick-meals.jpg",
      recipeCount: 28,
    },
  ];

  const router = useRouter();

  const handleClick = (categoryTitle) => {
    // router.push(`/recipes/category/${encodeURIComponent(categoryTitle)}`);
    router.push("all-recipes");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-yellow-900 mb-2">
            Recipe Categories
          </h2>
          <p className="text-gray-600">
            Discover delicious recipes by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map(
            ({ title, description, imageUrl, recipeCount }, index) => (
              <RecipeCategoryCard
                key={index}
                title={title}
                description={description}
                imageUrl={imageUrl}
                recipeCount={recipeCount}
                onClick={() => handleClick(title)}
                borderVariant={index % 2 === 0 ? "variant1" : "variant2"}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipeCategory;
