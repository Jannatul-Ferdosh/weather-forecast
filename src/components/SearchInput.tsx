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
    >
      <InputGroup endElement={<BsSearch />} borderRadius={20} bgColor="#a2e3ff">
        <Input color="gray.900" ref={ref} borderRadius={20} placeholder="Search City Name Here..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
