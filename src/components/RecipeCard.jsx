import {
  Card,
  Box,
  CardBody,
  Image,
  AspectRatio,
  Heading,
  Text,
  Tag,
  CardHeader,
  HStack,
} from "@chakra-ui/react";

export const RecipeCard = ({
  recipe,
  clickFn,
  label,
  image,
  mealType,
  dishType,
  cautions,
  dietLabels,
  healthLabels,
}) => {
  return (
    <Card
      m="25"
      minWidth="300"
      maxW="300"
      borderRadius={"20"}
      background={"gray.100"}
      onClick={() => clickFn(recipe)}
      cursor={"pointer"}
    >
      <Box minH="50vh" align="center">
        <CardHeader padding={""}>
          <AspectRatio ratio={16 / 9}>
            <Image
              borderTopRadius={"20"}
              borderBottomRadius={"0"}
              src={image}
              alt={label}
            />
          </AspectRatio>
        </CardHeader>

        <CardBody padding={"4"}>
          <Text mt="" textTransform="uppercase">
            {mealType}
          </Text>
          <Heading mb="2" size="md">
            {label}
          </Heading>

          {healthLabels.includes("Vegetarian") && (
            <Tag mt="1" mb="1" mr="1" bg="purple.100">
              VEGETARIAN
            </Tag>
          )}
          {healthLabels.includes("Vegan") && (
            <Tag mt="1" mb="1" mr="1" bg="purple.100">
              VEGAN
            </Tag>
          )}

          {healthLabels.includes("Pescatarian") && (
            <Tag mt="1" mb="1" mr="1" bg="purple.100">
              PESCATARIAN
            </Tag>
          )}

          {dietLabels.length === 0 ? (
            <Box></Box>
          ) : (
            <Box>
              {dietLabels.map((dietLabel) => (
                <Tag
                  textTransform="uppercase"
                  mt="1"
                  mb="1"
                  mr="1"
                  bg="green.100"
                  key={dietLabel}
                >
                  {dietLabel}
                </Tag>
              ))}
            </Box>
          )}
          <HStack justifyContent="center">
            <Text textTransform="capitalize">Dish: </Text>
            <Text fontWeight="bold">{dishType}</Text>
          </HStack>
          {cautions.length === 0 ? (
            <Box></Box>
          ) : (
            <Box>
              <Text mt="1">Cautions:</Text>
              {cautions.map((caution) => (
                <Tag
                  textTransform="uppercase"
                  mt="1"
                  mb="1"
                  mr="1"
                  bg="red.300"
                  key={caution}
                >
                  {caution}
                </Tag>
              ))}
            </Box>
          )}
        </CardBody>
      </Box>
    </Card>
    // {/* </Box> */}
  );
};
