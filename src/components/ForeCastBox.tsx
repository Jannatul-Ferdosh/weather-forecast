import useForecast from "@/hooks/useForcast";
import { Box, Text, Image } from "@chakra-ui/react";

interface Props {
  i: number;
}

const ForeCastBox = ({ i }: Props) => {
  const { data } = useForecast();
  const iconcode = data.list[i].weather[0].icon;
  const dayIcon = iconcode.endsWith('n') ? iconcode.replace('n', 'd') : iconcode;
  const url = "https://openweathermap.org/img/wn/" + dayIcon + "@2x.png";
  return (
    <Box
      display="grid"
      justifyContent="center"
      shadow="lg"
      borderRadius={20}
      padding={5}
      margin={10}
      bgColor="#03a7f3"
    >
      <Text
        display="flex"
        justifyContent="center"
        whiteSpace="nowrap"
      >
        {data?.list[i].dt_txt.substring(0, 10)}
      </Text>
      <Image
        src={url}
        boxSize="50px"
        objectFit="cover"
      />
      <Text display="flex" justifyContent="center">
        {data?.list[i].main.temp}°C
      </Text>
    </Box>
  );
};

export default ForeCastBox;
