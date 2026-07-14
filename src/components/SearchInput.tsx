import useWeatherStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setcity = useWeatherStore(s => s.setcity);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) setcity(ref.current.value);
      }}
      style={{ flex: 1 }}
    >
      <InputGroup endElement={<BsSearch color="gray.500" />} flex="1">
        <Input
          color="textColor"
          borderRadius="xl"
          bg="primary.100"
          _dark={{ bg: "primary.700" }}
          border="none"
          ref={ref}
          placeholder="Search city name..."
          _placeholder={{ color: "subtleText" }}
          size="lg"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
