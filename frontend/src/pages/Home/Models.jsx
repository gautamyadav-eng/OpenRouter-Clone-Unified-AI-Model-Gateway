import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Models = () => {
  return (
    <section className="w-full my-5 ">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-[17px] font-semibold">Featured Models</h2>
            <p className="text-sm text-gray-600">
              500+ active models on 80+ providers
            </p>
          </div>
          <button className="text-sm text-gray-600 items-center transition hover:text-blue-700 ">
            View all <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Models;
