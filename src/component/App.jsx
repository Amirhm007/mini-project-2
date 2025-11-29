import { useEffect, useState } from "react";
import React from "react";
import formatTime from "../formatTime";
function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  useEffect(
    function () {
      if (timeLeft <= 0) return;
      const timer = setInterval(function () {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    },
    [timeLeft]
  );

  return (
    <div className=" mt-28 w-screen h-screen flex justify-center items-top ">
      <div className="h-72 w-96 rounded-3xl shadow-lg flex flex-col justify-center border-t-4 text-red-600 items-center gap-y-10 bg-white">
        <h3 className="text-red-600 text-3xl tracking-[0.5] border-b-2 ">
          Today's special discounts
        </h3>
        {timeLeft > 0 ? (
          <p className="text-2xl tracking-[4px]">
            Time remaining :
            <span className="bg-emerald-700 text-lime-300 py-1 px-2 rounded-xl">
              {formatTime(timeLeft)}
            </span>
          </p>
        ) : (
          <p className="text-2xl tracking-[4px]">Time is up!!</p>
        )}

        <button
          className="text-white rounded-2xl py-2 px-8 bg-amber-600 tracking-[1px]
                           cursor-pointer                        
                           transition-all duration-300 ease-in-out 
                           hover:bg-amber-400                   
                           hover:shadow-lg                       
                           hover:scale-105                       
                           active:scale-95"
        >
          Get a discount
        </button>
      </div>
    </div>
  );
}

export default App;
