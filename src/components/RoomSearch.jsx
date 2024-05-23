import React from "react";
import { Input } from "@material-tailwind/react";
const RoomSearch = () => {
  return (
    <div>
      <div className="w-72">
        <Input
          label="Search Your Room"
          icon={<i className="" />}
        />
      </div>
    </div>
  );
};

export default RoomSearch;
