import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"
import {Menu} from "lucide-react";
const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-12">

        <div className="flex items-center ml-15">
          <Link to="/">
          <img
            src={logo}
            alt="OpenRouter"
            className="h-7 w-auto"
          />
          </Link>
        </div>

        <div className="hidden items-center gap-7 md:flex  ">
          <Link to="/models" className="pr-4  text-gray-600 transition hover:text-gray-900">Models</Link>
          <Link to="/docs" className="pr-4  text-gray-600 transition hover:text-gray-900">Docs</Link>
          <Link to="/playground" className="pr-4  text-gray-600 transition hover:text-gray-900">Playground</Link>
          <Link to="/pricing" className="pr-4  m-2 text-gray-600 transition hover:text-gray-900">Pricing</Link>
           <Button LinkComponent={Link} to="/signup" variant="contained" >Sign UP</Button>
        </div>
        <button className="md:hidden flex ">
           <span className="mr-2 text-gray-600">Menu</span>
          <Menu size={24}/>
        </button>
       
      </div>
    </nav>
  );
};

export default Navbar;