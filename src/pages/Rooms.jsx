import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import RoomCard from "../components/RoomCard";
import RoomFilter from "../components/RoomFilter";
import RoomSearch from "../components/RoomSearch";

const Rooms = () => {
  const axiosComomon = useAxios();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosComomon.get("/rooms");
      return data;
    },
  });
  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div>
        <RoomFilter />
        <RoomSearch />
      </div>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {rooms?.map(
          (room, idx) => room.Availability && <RoomCard key={idx} room={room} />
        )}
      </div>
    </>
  );
};

export default Rooms;
