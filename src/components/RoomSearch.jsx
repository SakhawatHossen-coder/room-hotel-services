import React from "react";
import { Input } from "@material-tailwind/react";
const RoomSearch = () => {
  return (
    <div>
      <div className="w-72">
        <Input label="Input With Icon" icon={<i className="fas fa-search" />} />
      </div>
    </div>
  );
};

export default RoomSearch;
