import React, { useEffect, useState } from "react";
const API_URL = "http://localhost:3000/api/activity";

const formatTime = (dateValue) => {
  const date = new Date(dateValue);

  if(Number.isNaN(date.getTime())){
    return "Unknown"; 
  }

  const seconds = Math.max(0,Math.floor((Date.now() - date.getTime())/1000));

  if(seconds < 60) return "just now";

 const minutes = Math.floor(seconds / 60);
 if(minutes <60) return `${minutes} min ago`;
 
 const hours = Math.floor(minutes/60);
 if(hours <24) return `${hours} hour${hours >1 ? "s":""}ago`;

 const days = Math.floor(hours /24);
 return `${days} day ${days>1 ? "s": ""}ago`;
}

const RecentActivity = () => {

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivities = async() =>{
      try{
       setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          method: "GET",
         
          credentials:"include",
        });

        const result = await response.json();

        if(!response.ok  || !result.success){
          throw new Error(
            result.message || "Failed to fetch recent activity"
          );
        }

        setActivities(result.activities || []);
      }catch(error){
        setError(error.message || "Somthing went wrong.");
      }finally{
        setLoading(false);
      }
    };
    fetchActivities();
  }, [])
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          A preview of recent API requests.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-162.5 text-left text-sm">
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-5 py-4 font-medium">Model</th>
              <th className="px-5 py-4 font-medium">Endpoint</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Tokens</th>
              <th className="px-5 py-4 font-medium">Time</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr   colSpan="5" className="text-gray-700" >
                <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                   Loading recent activity...
                </td>
              </tr>
            ):error ?(
              <tr colSpan="5" className="text-gray-700">
                <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                   {error}
                </td>
                </tr>
            ):activities.length === 0? (
              <tr colSpan="5" className="text-gray-700">
                <td className="whitespace-nowrap px-5 py-4">
                  No recent activity found.
                </td>
                </tr>
            ):(
                 activities.map((activity, index) => {
                const status = String(activity.status || "Unknown");
                const isSuccess = status.toLowerCase() === "success";

                return (
                  <tr
                    key={activity._id || `${activity.model}-${index}`}
                    className="text-gray-700"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                      {activity.model || "—"}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                      /api/chat
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          isSuccess
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {isSuccess ? "Success" : status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">—</td>

                    <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                      {formatTime(activity.createdAt)}
                    </td>
                  </tr>
                );
})
)}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 px-5 py-4">
        <p className="text-xs text-gray-500">
           Showing your latest API requests.
        </p>
      </div>
    </section>
  );
};

export default RecentActivity;
