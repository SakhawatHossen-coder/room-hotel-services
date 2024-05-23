import React from "react";
import { Select, Option } from "@material-tailwind/react";
const RoomFilter = ({sort,setSort}) => {
     console.log(sort)
  return (
    <div>
      <Select
        variant="static"
        label="Filter Price"
        value={sort}
        onChange={(e) => setSort(e.target.elements.value)}
      >
        <Option value="High">High to Low</Option>
        <Option value="Low">Low to High</Option>
      </Select>
    </div>
  );
};

export default RoomFilter;
