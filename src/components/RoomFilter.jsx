import React from "react";
import { Select, Option } from "@material-tailwind/react";
const RoomFilter = () => {
  return (
    <div>
      <Select variant="static" label="Select Version">
        <Option>High to Low</Option>
        <Option>Low to High</Option>
      </Select>
    </div>
  );
};

export default RoomFilter;
