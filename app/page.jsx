import RecipeCategory from "@/components/RecipeCategory/RecipeCategory";
import Hero from "../components/Hero/Hero";
import RecipesList from "../components/Recipes/RecipesList";
import Testimonial from "@/components/testimonial/Testimonial";
import ChatView from "@/components/chat/ChatView";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecipeCategory />
      <RecipesList />
      <Testimonial />
      <ChatView />
    </div>
  );
}
export const metadata = {
  title: "Recipo || Home",
  description: "Welcome to our recipe app, where culinary adventures begin!",
};
