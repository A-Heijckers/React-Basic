import { useState } from "react";
import { Container, Center, Heading, Input, Flex } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container background={"blue.400"} maxW={"100%"} minH={"100vh"}>
        <Container background={"blue.400"} maxW={"90%"} minH={"100%"}>
          <Center>
            <Heading textColor={"white"} m="2">
              WINC Recipe Checker
            </Heading>
          </Center>

          <Container>
            <Input
              maxWidth="500"
              placeholder="Search recipes"
              bg={"gray.100"}
              size="md"
              mt="5"
              mb="5"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Container>

          <Flex maxW={"100%"} justifyContent="center" flexWrap="wrap">
            {recipes
              .filter((item) => {
                const nameMatch = item.recipe.label
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const healthLabelsMatch = item.recipe.healthLabels.some(
                  (label) => label.toLowerCase().includes(search.toLowerCase())
                );

                return nameMatch || healthLabelsMatch;
              })
              .map((item) => (
                <RecipeCard
                  key={item.recipe.label}
                  recipe={item}
                  {...item.recipe}
                  clickFn={clickFn}
                />
              ))}
          </Flex>
        </Container>
      </Container>
    </>
  );
};
