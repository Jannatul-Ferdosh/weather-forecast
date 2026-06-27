import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form>
      <InputGroup endElement={<BsSearch/>} >
        <Input placeholder="Search City Name Here..."/>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
