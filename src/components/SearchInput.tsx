import useWeatherStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setcity = useWeatherStore(s => s.setcity);
  const city = useWeatherStore(s => s.city);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) setcity(ref.current.value);
        console.log(city);
      }}
    >
      <InputGroup endElement={<BsSearch />}>
        <Input ref={ref} placeholder="Search City Name Here..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
