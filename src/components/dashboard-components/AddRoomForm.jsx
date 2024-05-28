import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
const image_hosting_key = import.meta.env.VITE_IMGBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddRoomForm = () => {
  const { user, setLoading, loading } = useAuth();
  const axiosCommon = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const { mutateAsync } = useMutation({
  //     mutationFn: async (dataRoom) => {
  //       const { data } = await axiosCommon.post(`/rooms`, dataRoom);
  //       return data;
  //     },
  //     onSuccess: () => {
  //       toast.success("Room Added Successfully!");
  //       //  navigate("/");
  //       setLoading(false);
  //     },
  //     onError: () => {
  //       toast.error("Something went wrong!");
  //     },
  //   });
  const onSubmit = async (data) => {
    //     console.log(data);
    //  const { "Room Name", name, password } = data;
    let roomname = data["Room Name"];
    let price = data["Price per Night"];
    let desc = data["Short Description"];
    let off = data["Special Offers"];
    console.log(roomname, price, desc, off);
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
    const imageFile = { image: data?.image[0] };
    console.log(imageFile);

    setLoading(true);
    const result = await axiosCommon.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(result.data)
    if (result.data?.success) {
      const dataRoom = {
        roomname,
        price: parseFloat(price),
        desc,
        off,
        host,
        image: result?.data?.data?.display_url,
      };
      const dataRes = await axiosCommon.post(`/rooms`, dataRoom);
      //  console.log(dataRes.data);
      if (dataRes.data.insertedId) {
        setLoading(false);
        toast.success("Room Added Successfully!");
      }
      console.table(dataRoom);
    }
    //  const image = result?.data?.data?.display_url;
    //  await mutateAsync(image);

    //  return console.log(result.data);

    //  await mutateAsync(dataRoom);

    //  console.error(error);
  };
//   if (loading) return <Spinner fontSize={24} className="animate-spin m-auto" />;
  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add Your Desire Room
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="Room Name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Room Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Room Name", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Price per Night"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Price per Night
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Price per Night", { required: true })}
                />
              </div>
            </div>

            <div>
              <label
                for="image"
                className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>

                <h2 className="mx-3 text-gray-400">Room image</h2>
              </label>
              <div className="mt-2.5">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className=""
                  {...register("image", { required: true })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="Availability"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Availability
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Availability", { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Special Offers"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Special Offers
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Special Offers", { required: true })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="Short Description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Short Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="Short Description"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("Short Description", { required: true })}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              disabled={loading}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <Spinner className="animate-spin m-auto" />
              ) : (
                "Add Room"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoomForm;
