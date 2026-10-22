
import { useState } from "react";
import logo2 from "../../assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function ResetPassword() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [submitOtp, setSubmitOtp] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitEmail = async (e) => {
    e.preventDefault()
    try{
      setLoading(true)
      const {data} = await axios.post("http://localhost:3000/api/auth/forgot-password", {email});
       if(data.success){
        toast.success(data.message);
        setIsEmailSent(true)
       }else{
        toast.error(data.message)
       }
    }catch(error){
       toast.error(
    error.response?.data?.message || "Something went wrong"
  );
    }finally{
      setLoading(false);
    }
  }

  const onSubmitOtp = async (e) => {
    e.preventDefault()
      if (!/^\d{6}$/.test(otp)){
        toast.error("Please enter a valid 6-digits OTP");
        return;
      }
      try {
        setLoading(true)
        const {data} = await axios.post("http://localhost:3000/api/auth/verify-otp", {email, otp});

        if(data.success){
          toast.success(data.message ||"OTP verified successfully");
          setSubmitOtp(true)
        }else{
          toast.error(data.message ||  "Invalid OTP");
        }
      } catch (error) {
         toast.error(
    error.response?.data?.message || "Something went wrong"
  );
      }finally{
        setLoading(false);
      }
    
  }

  const OnHandelPassword = async (e) => {
    e.preventDefault()

    if(newPassword !== confirmPassword){
      toast.error("Password do not match");
      return;
    }
    if(newPassword.length < 8){
      toast.error("Please must be enter at least 8 character");
      return ;
    }

    try{
      setLoading(true);
      const {data} = await axios.post("http://localhost:3000/api/auth/password-reset", {email, newPassword});

      if(data.success){
        toast.success(data.message);
        navigate("/signup");
      }else{
        toast.error(data.message)
      }
    }catch(error){
       toast.error(
    error.response?.data?.message || "Something went wrong"
  );
    }finally{
      setLoading(false);
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
        <h1 className="mb-8 flex items-center text-2xl font-bold tracking-tight">
          <span className="mr-2 inline-flex h-9 w-9 items-center justify-center">
            <img
              className="size-7 pt-1"
              src={logo2}
              alt="OpenRouter logo"
            />
          </span>
          OpenRouter
        </h1>

        {!isEmailSent && 
          <>
            <h2 className="text-2xl font-semibold">Reset Password</h2>

            <p className="mb-7 mt-2 text-sm text-neutral-400">
              Enter your registered email.
            </p>

            <form className="space-y-5" onSubmit={onSubmitEmail}>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                />
              </div>


              <button type="submit" className={buttonClass}>
                Send OTP
              </button>
            </form>
          </>
        }

        {!submitOtp && isEmailSent && 
          <>
            <h2 className="text-2xl font-semibold">Reset Password OTP</h2>

            <p className="mb-7 mt-2 text-sm text-neutral-400">
              Enter the 6-digits code send to your email.
            </p>

            <form className="space-y-5" onSubmit={onSubmitOtp}>

               <div>
                <label className={labelClass}>6-digit OTP</label>


                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Enter OTP"
                  required
                  className={inputClass}
                />

                
              </div> 

              <button type="submit" className={buttonClass}>
                Submit
              </button>
            </form>
          </>
        }


        { submitOtp && isEmailSent &&(
          <>
            <h2 className="text-2xl font-semibold">Create new password</h2>

            <p className="mb-7 mt-2 text-sm text-neutral-400">
              Choose a strong password for your account.
            </p>

            <form className="space-y-5" onSubmit={OnHandelPassword}>
              <div>
                <label className={labelClass}>New password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Confirm password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  className={inputClass}
                />
              </div>

              <button type="submit" className={buttonClass} >
                Submit
              </button>
            </form>
          </>
        )}

        <p className="mt-6 text-center text-sm text-neutral-400">
          Remember your password?{" "}
          <button
            type="button"
            className={linkClass}
           onClick={() => navigate("/signup")}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
