import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ModalForm from "../components/ModalForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";
const RoomDetails = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { id } = useParams();
  const axiosCommon = useAxios();
  const { data: room = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms/${id}`);
      return data;
    },
  });
  //   console.log(Boolean(room["Special Offers"]));
  //   console.log("first");
  //   Boolean();
  return (
    <>
      {/* modal  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {/*  */}
      <Card className="flex flex-row max-w-[55rem] mx-auto my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-1 rounded-r-none"
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

          <Typography color="gray" className="mb-8 font-normal">
            {room["Room Description"]}
          </Typography>
          <span className="inline-block">
            <Button color="deep-purple" className="flex items-center gap-2">
              Price Per Night : {room["Price per Night"]}
            </Button>
          </span>
          <span className="inline-block mx-5">
            <Button color="green" className="flex items-center gap-2">
              Availability : {room["Availability"] && "Available"}
            </Button>
          </span>
          <span className="inline-block my-2">
            <Button color="amber" className="flex items-center gap-2">
              Room Size: {room["Room Size"]}
            </Button>
          </span>
        </CardBody>
      </Card>
      <div className="my-5 w-1/2 mx-auto ">
        <h1 className="text-xl font-semibold uppercase">
          select your booking date
        </h1>
        <div className="flex gap-4">
          <CiCalendarDate size={24} />
          <DatePicker
            className="border-2"
            selected={startDate}
            onChange={(date) => setStartDate(date.toLocaleDateString())}
          />
        </div>
      </div>
      <CardFooter className="pt-0 flex justify-center items-center">
        <Button
          color="blue"
          size="lg"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Book Now
          <ModalForm room={room} startDate={startDate} />
        </Button>
      </CardFooter>
    </>
  );
};

export default RoomDetails;
