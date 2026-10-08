import React from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-[#FCFCFE]">
      <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-12  px-6 py-12 md:grid-cols-5 md:px-10 sm:grid-cols-2">
        <div>
          <img src={logo} alt="OpenRouter" className="h-5 w-auto" />

          <p className="text-muted py-3">© 2026 OpenRouter, Inc</p>
        </div>

        <div>
          <h2 className="font-medium text-[14px] text-[#03080A]  ">Products</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 ">
            <a href="" className="transition hover:text-blue-700">
              Chat
            </a>
            <a href="" className="transition hover:text-blue-700">
              Rankings
            </a>
            <a href="" className="transition hover:text-blue-700">
              Benchmarks
            </a>
            <a href="" className="transition hover:text-blue-700">
              Apps
            </a>
            <a href="" className="transition hover:text-blue-700">
              Discover
            </a>
            <a href="" className="transition hover:text-blue-700">
              Models
            </a>
            <a href="" className="transition hover:text-blue-700">
              Ori
            </a>
            <a href="" className="transition hover:text-blue-700">
              Collections
            </a>
            <a href="" className="transition hover:text-blue-700">
              Providers
            </a>
            <a href="" className="transition hover:text-blue-700">
              Tools
            </a>
            <a href="" className="transition hover:text-blue-700">
              Business
            </a>
            <a href="" className="transition hover:text-blue-700">
              Enterpirse
            </a>
            <a href="" className="transition hover:text-blue-700">
              Labs
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-[14px] text-[#03080A]  ">Company</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 ">
            <a href="" className="transition hover:text-blue-700">
              About
            </a>
            <a href="" className="transition hover:text-blue-700">
              Blog
            </a>
            <a href="" className="transition hover:text-blue-700">
              Careers{" "}
              <span className="px-1 text-[12px] border border-gray-200 rounded-2xl bg-blue-100 text-blue-700">
                Hiring
              </span>
            </a>
            <a href="" className="transition hover:text-blue-700">
              Privacy
            </a>
            <a href="" className="transition hover:text-blue-700">
              Terms of Service
            </a>
            <a href="" className="transition hover:text-blue-700">
              Trust Center
            </a>
            <a href="" className="transition hover:text-blue-700">
              Support
            </a>
            <a href="" className="transition hover:text-blue-700">
              Work with OR
            </a>
            <a href="" className="transition hover:text-blue-700">
              Data{" "}
            </a>
            <a href="" className="transition hover:text-blue-700">
              Brand
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-[14px] text-[#03080A]  ">
            Developer
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 ">
            <a href="" className="transition hover:text-blue-700">
              Documentation
            </a>
            <a href="" className="transition hover:text-blue-700">
              Api Reference
            </a>
            <a href="" className="transition hover:text-blue-700">
              Developer Platform
            </a>
            <a href="" className="transition hover:text-blue-700">
              Status
            </a>
            <a href="" className="transition hover:text-blue-700">
              AI Site Map
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-[14px] text-[#03080A]  ">Connect</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-500 ">
            <a href="" className="transition hover:text-blue-700">
              Discord
            </a>
            <a href="" className="transition hover:text-blue-700">
              GitHub
            </a>
            <a href="" className="transition hover:text-blue-700">
              LinkedIn
            </a>
            <a href="" className="transition hover:text-blue-700">
              X
            </a>
            <a href="" className="transition hover:text-blue-700">
              YouTube
            </a>
          </div>
        </div>
      </div>
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
