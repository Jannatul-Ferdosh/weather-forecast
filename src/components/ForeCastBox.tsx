import useForecast from "@/hooks/useForcast";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  i: number;
}

const ForeCastBox = ({ i }: Props) => {
  const { data } = useForecast();
  
  return (
    <Box
      display="grid"
      justifyContent="center"
      shadow="lg"
      borderRadius={20}
      padding={5}
      margin={10}
      bgColor="#c5fafe"
    >
      <Text display="flex" justifyContent="center" marginBottom={5} whiteSpace="nowrap">
        {data?.list[i].dt_txt.substring(0,10)}
      </Text>
      <Text display="flex" justifyContent="center" marginBottom={5}>
        {data?.list[i].main.temp}
      </Text>
    </Box>
  );
};

export default ForeCastBox;
