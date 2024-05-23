import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const RoomCard = ({ room }) => {
  const roomImages = room["Room Images"];
  const desc = room["Room Description"];
  //   console.log(roomImages);
  return (
    <Link>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={roomImages[0]} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {desc}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default RoomCard;
