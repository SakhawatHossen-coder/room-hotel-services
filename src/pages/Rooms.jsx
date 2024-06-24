import React, { useEffect, useState } from "react";
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
  // console.log(rooms)
  const [sort, setSort] = useState("High");
  const [roomss, setRoomss] = useState([]);
  useEffect(() => {
    const sortedRooms = [...rooms].sort((a, b) => {
      if (sort === "High") {
        return a["Price per Night"] - b["Price per Night"];
      } else {
        return b["Price per Night"] - a["Price per Night"];
      }
    });
    // setSort(sortedRooms);
    setRoomss(sortedRooms);
  }, []);
  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="mx-4 flex justify-end items-center my-5 gap-2">
        <RoomFilter sort={sort} setSort={setSort} />
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
