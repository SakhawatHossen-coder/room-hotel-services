import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
const RoomDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxios();
  const { data: room = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms/${id}`);
      return data;
    },
  });
  console.log(Boolean(room["Special Offers"]));
  console.log("first");
  //   Boolean();
  return (
    <Card className="w-full max-w-[55rem] mx-auto my-10 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={room["Room Images"]}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {/* Special Offers: {room["Special Offers"] || "No Offer Available"} */}
          Special Offers:{" "}
          {room["Special Offers"]?.length > 0
            ? room["Special Offers"].join(", ")
            : "No Offer Available"}
        </Typography>
        {/* <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography> */}
        <Typography color="gray" className="mb-8 font-normal">
          {room["Room Description"]}
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Price Per Night : {room["Price per Night"]}
          </Button>
        </a>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Availability : {room["Availability"] && "Available"}
          </Button>
        </a>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Room Size: {room["Room Size"]}
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default RoomDetails;
