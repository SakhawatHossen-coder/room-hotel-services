import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

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
  return <div>Rooms {rooms.length}</div>;
};

export default Rooms;
