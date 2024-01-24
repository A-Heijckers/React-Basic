import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Grid,
  Container,
  Tag,
  Box,
  List,
  ListItem,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <>
      <Box align={"center"} bg={"blue.400"} w={["100%"]} minH={"95vh"}>
        <Box
          align={"left"}
          minH="95vh"
          maxWidth={["100vw", "100vw", "100vw", "80vw", "60vw"]}
          bg={"gray.100"}
        >
          <Grid bg="grey">
            <Button
              minH="5vh"
              _hover={{
                background: "red",
                color: "white",
              }}
              bg="grey"
              textColor="white"
              onClick={() => clickFn()}
            >
              Back to recipes
            </Button>
          </Grid>
          <Image
            boxSize="100%"
            h="30vh"
            objectFit="cover"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />

          <SimpleGrid minH="55.6vh" spacing={3} minChildWidth="400px">
            <Container>
              <Text
                mt="10"
                mb="2"
                textColor={"darkgray"}
                fontWeight={"bold"}
                textTransform="uppercase"
              >
                {recipe.recipe.mealType}
              </Text>
              <Heading fontSize="x-large" mt="2" mb="2">
                {recipe.recipe.label}
              </Heading>
              <HStack mt="2">
                <Text>Total cooking time: </Text>
                <Text fontWeight={"bold"}>
                  {recipe.recipe.totalTime} minutes{" "}
                </Text>
              </HStack>
              <HStack mt="2">
                <Text>Servings </Text>
                <Text fontWeight={"bold"}>{recipe.recipe.yield} </Text>
              </HStack>

              <Heading fontSize="x-large" size="sm" mt="2" mb="2">
                Ingredients:
              </Heading>
              <List>
                {recipe.recipe.ingredientLines.map((ingredientLine, index) => (
                  <ListItem mt="2" key={index}>
                    {ingredientLine}
                  </ListItem>
                ))}
              </List>
            </Container>

            <Container>
              {recipe.recipe.healthLabels && (
                <Box>
                  <Text mt="10" mb="2" fontWeight={"bold"}>
                    Health labels:
                  </Text>
                  {recipe.recipe.healthLabels.map((healthLabel) => (
                    <Tag
                      fontWeight={"bold"}
                      mt="1"
                      mr="1"
                      mb="1"
                      bg="purple.100"
                      key={healthLabel}
                    >
                      {healthLabel}
                    </Tag>
                  ))}
                </Box>
              )}

              {recipe.recipe.dietLabels && (
                <div>
                  <Text mt="2" mb="2">
                    Diet:
                  </Text>
                  {recipe.recipe.dietLabels.map((dietLabel) => (
                    <Tag
                      fontWeight={"bold"}
                      mt="1"
                      mr="1"
                      mb="1"
                      bg="green.100"
                      key={dietLabel}
                    >
                      {dietLabel}
                    </Tag>
                  ))}
                </div>
              )}

              {recipe.recipe.cautions && (
                <div>
                  <Text mt="2" mb="2">
                    Cautions:
                  </Text>
                  {recipe.recipe.cautions.map((caution) => (
                    <Tag
                      fontWeight={"bold"}
                      mt="1"
                      mr="1"
                      mb="1"
                      bg="red.300"
                      key={caution}
                    >
                      {caution}
                    </Tag>
                  ))}
                </div>
              )}

              <Text fontWeight="bold" mb="2">
                Total nutrients:
              </Text>
              <Flex mb="2">
                <Box mr="10">
                  {Math.round(recipe.recipe.calories)}
                  <Text fontWeight={"bold"}>CALORIES</Text>
                </Box>
                <Box mr="10">
                  {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g
                  <Text fontWeight={"bold"}>CARBS</Text>
                </Box>
                <Box mr="10">
                  {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
                  <Text fontWeight={"bold"}>PROTEIN</Text>
                </Box>
                <Box>
                  {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
                  <Text fontWeight={"bold"}>FAT</Text>
                </Box>
              </Flex>
              <Flex mb="2">
                <Box mr="10">
                  {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
                  <Text fontWeight={"bold"}>CHOLESTREOL</Text>
                </Box>
                <Box>
                  {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
                  <Text fontWeight={"bold"}>SODIUM</Text>
                </Box>
              </Flex>
            </Container>
          </SimpleGrid>
          <Grid>
            <Button
              borderRadius={"0"}
              _hover={{
                background: "red",
                color: "white",
              }}
              minH="5vh"
              mt="10"
              bg="grey"
              textColor="white"
              onClick={() => clickFn()}
            >
              Back to recipes
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
