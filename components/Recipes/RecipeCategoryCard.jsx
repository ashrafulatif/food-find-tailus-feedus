import React from "react";
import { Utensils, Coffee, Heart, Cookie, Clock, ChefHat } from "lucide-react";

const RecipeCategoryCard = ({
  title,
  description,
  imageUrl,
  recipeCount,
  onClick,
  borderVariant = "default",
}) => {
  //border radius
  const borderClass =
    borderVariant === "variant1"
      ? "rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl border-t-2 border-orange-300/80"
      : borderVariant === "variant2"
      ? "rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm border-b-2 border-orange-300/80 "
      : "rounded-3xl";

  // icons based on category title
  const getIcon = (categoryTitle) => {
    switch (categoryTitle.toLowerCase()) {
      case "italian cuisine":
        return <Utensils className="w-6 h-6 text-orange-600" />;
      case "asian fusion":
        return <Coffee className="w-6 h-6 text-orange-600" />;
      case "healthy bowls":
        return <Heart className="w-6 h-6 text-orange-600" />;
      case "desserts":
        return <Cookie className="w-6 h-6 text-orange-600" />;
      case "quick meals":
        return <Clock className="w-6 h-6 text-orange-600" />;
      default:
        return <ChefHat className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <div
      className={`bg-white flex justify-center items-center flex-col ${borderClass} shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-4 `}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-3">
        {getIcon(title)}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500 text-xs mb-2">{recipeCount} recipes</p>
      </div>
    </div>
  );
};

export default RecipeCategoryCard;
