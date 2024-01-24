// import { Center, Heading } from "@chakra-ui/react";
// import { data } from "../utils/data";

// export const henk = () => {
//   // You can play around with the console log, but ultimately remove it once you are done
//   console.log(data.hits[0].recipe.label);

//   return (
//     <Center h="100vh" flexDir="column">
//       <Heading>Your Recipe App</Heading>
//     </Center>
//   );
// };
import { useState } from "react";
import {
  Container,
  Center,
  Heading,
  SimpleGrid,
  Input,
  Image,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";
import { data } from "../utils/data";

export const Gekkehenkie = ({ recipes, clickFn }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {data.hits.map((hit, index) => {
          const recipe = hit.recipe;
          return (
            <li key={index}>
              <h2>{recipe.label}</h2>
              <img src={recipe.image} alt={recipe.label} />
              {recipe.dietLabels.length > 0 && (
                <p>Diet Label: {recipe.dietLabels.join(", ")}</p>
              )}
              {recipe.cautions.length > 0 && (
                <p>Cautions: {recipe.cautions.join(", ")}</p>
              )}
              <p>Meal Type: {recipe.mealType.join(", ")}</p>
              <p>Dish Type: {recipe.dishType.join(", ")}</p>
              <p>Health Labels: {recipe.healthLabels.join(", ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
