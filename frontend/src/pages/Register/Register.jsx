
import { useState } from "react";
import logo2 from "../../assets/logo2.png";
import axios from "axios";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [page, setPage] = useState("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const navigate = useNavigate();

  const onSubmitHandel = async (e) => {
    try{
      e.preventDefault();
      axios.defaults.withCredentials = true;

      if(page === "signup"){
        const {data} = await axios.post("http://localhost:3000/api/auth/register",{
          username,email,password,
        });

        if(data.success){
          toast.success("Account created successfully!");

          setPage("login");
          setUsername("");
          setEmail("");
          setPassword("");
        }else{
          toast.error(data.message);
        }
      }else {
        const {data} = await axios.post("http://localhost:3000/api/auth/login",{
          email, password
        });

        if(data.success){
          toast.success("Login Successfully!")
          navigate("/")
        }else{
          toast.error(data.message || "Login Failed");
        }
      }
    }catch (error) {
  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-lime-400";

  const labelClass =
    "mb-2 block text-sm font-medium text-neutral-300";

  const buttonClass =
    "w-full rounded-lg bg-lime-400 px-4 py-3 font-semibold text-neutral-950 transition hover:bg-lime-300";

  const linkClass =
    "font-medium text-lime-400 hover:text-lime-300";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#101010] px-4 py-10 font-sans text-white">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-[#181818] p-8 shadow-2xl">

        <h1 className="mb-8 text-2xl font-bold tracking-tight">
          <span className="mr-2   inline-flex h-9 w-9 items-center justify-center   text-neutral-950">
           <img className="size-7 pt-1" src={logo2} alt="" />
          </span>
          OpenRouter
        </h1>

        {page === "signup" && (
          <>
            <h2 className="text-2xl font-semibold">
              Create your account
            </h2>

            <p className="mb-7 mt-2 text-sm text-neutral-400">
              Get started with OpenRouter.
            </p>

            <form className="space-y-5" onSubmit={onSubmitHandel}>
              <div>
                <label className={labelClass}>Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className={inputClass}
                />
              </div>

              <button type="submit" className={buttonClass} >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-neutral-400">
              Already have an account?{" "}
              <button
                type="button"
                className={linkClass}
                onClick={() => setPage("login")}
              >
                Sign in
              </button>
            </p>
          </>
        )}

        {page === "login" && (
          <>
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="mb-7 mt-2 text-sm text-neutral-400">
              Sign in to your account.
            </p>

            <form className="space-y-5" onSubmit={onSubmitHandel}>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className={inputClass}
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className={linkClass + " text-sm"}
                  onClick={() => navigate("/reset-password")}
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className={buttonClass}>
                Sign in
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-neutral-400">
              New to OpenRouter?{" "}
              <button
                type="button"
                className={linkClass}
                onClick={() => setPage("signup")}
              >
                Create account
              </button>
            </p>
          </>
        )}

        
        
      </div>
    </div>
  );
}
