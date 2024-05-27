import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../hooks/useAxios";

const ModalForm = ({ room, startDate }) => {
  const navigate = useNavigate();
  let dateVal = startDate.toLocaleDateString();
  console.log(dateVal);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const axiosCommon = useAxios();
  const onSubmit = async (data) => {
    
  };
  return (
    <>
      <dialog
        id="my_modal_5"
        classNameName="modal modal-bottom sm:modal-middle"
      >
        <div classNameName="modal-box">
          <div classNameName="modal-action">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                  Your Booking Details
                </h2>

                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      for=" Room Price"
                    >
                      Room Price
                    </label>
                    <input
                      id="Room Price"
                      disabled
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      defaultValue={room["Price per Night"]}
                    />
                  </div>

                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      for="Booking Date"
                    >
                      Booking Date
                    </label>
                    <input
                      id="Booking Date"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      defaultValue={dateVal}
                    />
                  </div>
                  <div>
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      for="Availability"
                    >
                      Availability
                    </label>
                    <input
                      id="Availability"
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      defaultValue={room["Availability"] && "Available"}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-900 focus:outline-none focus:bg-gray-600"
                  >
                    Save
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
