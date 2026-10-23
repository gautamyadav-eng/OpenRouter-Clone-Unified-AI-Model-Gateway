import React from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#FCFCFE]">
      <div className="border-t border-gray-200 grid  grid-cols-1 gap-10 md:grid-cols-2 md:mb-15">
        <div className=" pt-10  px-12 mx-10 md:mx-15 ">
          <label className=" text-[14px] text-[#03080A]">
            Join the OpenRouter newsletter
          </label>
          <p className=" text-mb text-[#03080AB0]   ">
            Model usage data, product updates, and research reports.
            <br /> One email each week.
          </p>
        </div>

        <div className="py-2 pl-10 md:pt-10  ml-10 md:mr-10">
          <div className=" flex w-full flex-col sm:flex-row  gap-2 mb-4">
            <input type="email" name="email" placeholder="You@Company.com" className="h-10 min-h-10 min-w-0 flex-1 rounded-md border border-gray-200 bg-[#ffffff] px-3 text-sm outline-none  "  />
            <Button variant="contained" sx={{
      height: "40px",
      minWidth: "110px",
      flexShrink:0,
      textTransform: "none",
      
    }} >Subscribe</Button>
          </div>
          <p className="text-[12px] text-[#03080AB0] mr-4">By subscribing you agree to receive the OpenRouter newsletter: model usage data, product updates, and research reports, about one email a week. Unsubscribe anytime via the link in every email. See our Privacy Policy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
