import useForecast from "@/hooks/useForcast";
import { Text, Image, VStack } from "@chakra-ui/react";

interface Props {
  i: number;
}

const ForeCastBox = ({ i }: Props) => {
  const { data } = useForecast();
  if (!data) return null;

  const item = data.list[i];
  const iconcode = item.weather[0].icon;
  const dayIcon = iconcode.endsWith('n') ? iconcode.replace('n', 'd') : iconcode;
  const url = `https://openweathermap.org/img/wn/${dayIcon}@2x.png`;

  const date = new Date(item.dt_txt);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <VStack
      gap={2}
      shadow="lg"
      borderRadius="2xl"
      p={5}
      bg="cardBg"
      borderWidth="1px"
      borderColor="cardBorder"
      align="center"
      transition="transform 0.2s, shadow 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
    >
      <Text fontWeight="bold" fontSize="lg">
        {dayName}
      </Text>
      <Text fontSize="sm" color="subtleText">
        {dateStr}
      </Text>
      <Image
        src={url}
        boxSize="70px"
        objectFit="contain"
      />
      <Text fontSize="2xl" fontWeight="bold">
        {Math.round(item.main.temp)}°
      </Text>
      <Text fontSize="sm" color="subtleText" textTransform="capitalize" textAlign="center">
        {item.weather[0].description}
      </Text>
    </VStack>
  );
};

export default ForeCastBox;
