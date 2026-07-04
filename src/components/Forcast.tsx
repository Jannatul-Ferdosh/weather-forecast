import useForecast from "@/hooks/useForcast";
import { Spinner } from "@chakra-ui/react";
import ForcastHeading from "./ForcastHeading";

const Forcast = () => {
  const { data, error, isLoading } = useForecast();

  if (error) return null;
  if (isLoading) return <Spinner />;
  console.log(data);
  if (data) {
    return (
      <>
        <ForcastHeading />
      </>
    );
  }
};

export default Forcast;
