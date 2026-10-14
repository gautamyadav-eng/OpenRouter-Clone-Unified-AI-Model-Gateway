import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import chatgpt from "../../assets/chatgpt.svg";
import google from "../../assets/google.svg"
import claude from "../../assets/claude.png"
import { useNavigate } from "react-router-dom";

const Models = () => {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("/models")} className="text-sm text-gray-600 items-center transition hover:text-blue-700 ">
            View all <ArrowForwardIcon fontSize="small" />
          </button>
        </div>

        <div className=" w-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-5">
          <div className="w-full  border border-gray-200 transition hover:bg-gray-100 rounded-2xl">
            <div className="flex p-6">
              <img
                src={chatgpt}
                alt=""
                className="w-12 h-12 border border-gray-200  p-2 rounded"
              />
              <div>
                <h2 className="font-semibold text-md pl-4">GPT-6 Sol </h2>
                <p className="text-sm text-gray-600 pl-4">by openai</p>
              </div>
            </div>

            <div className="flex  border-t justify-between  mx-5 mb-2 py-4 border-gray-200">
              <div>
                <p className="text-sm text-gray-600">Tokens</p>
                <p className="text-sm">863.6B</p>
              </div>
              <div>
                <p className="text-md text-gray-600">Weakly Trend</p>
                <p className="text-md text-gray-600 ml-15">-33%</p>
              </div>
            </div>
          </div>


          <div className="w-full  border border-gray-200 transition hover:bg-gray-100 rounded-2xl">
           <div className="flex p-6">
            <img src={google} alt="" className="w-12 h-12 border border-gray-200  p-2 rounded" />
            <div>
              <h2 className="font-semibold text-md pl-4">Gemini 3.8 Flash </h2>
            <p className="text-sm text-gray-600 pl-4">by google</p>
            </div>
            
           </div>

           <div className="flex  border-t justify-between  mx-5 mb-2 py-4 border-gray-200">
            <div>
              <p className="text-sm text-gray-600">Tokens</p>
              <p className="text-sm">2.1T</p>
            </div>
             <div>
              <p className="text-md text-gray-600">Weakly Trend</p>
              <p className="text-md text-gray-600 ml-15">-13%</p>
            </div>
           </div>
          </div>
          

          <div className="w-full  border border-gray-200 transition hover:bg-gray-100 rounded-2xl">
           <div className="flex p-6">
            <img src={claude} alt="" className="w-12 h-12    " />
            <div>
              <h2 className="font-semibold text-md pl-4">Claude Fable 5.1 </h2>
            <p className="text-sm text-gray-600 pl-4">by anthropic</p>
            </div>
            
           </div>

           <div className="flex  border-t justify-between  mx-5 mb-2 py-4 border-gray-200">
            <div>
              <p className="text-sm text-gray-600">Tokens</p>
              <p className="text-sm">308.1B</p>
            </div>
             <div>
              <p className="text-md text-gray-600">Weakly Trend</p>
              <p className="text-md text-gray-600 ml-15">-26%</p>
            </div>
           </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Models;
