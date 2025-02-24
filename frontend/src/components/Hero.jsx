import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-around items-center mt-40">
      <div className="flex flex-col justify-center items-start gap-10">
        <div className="flex justify-center items-center gap-2">
          <img src="/images/Subtract.png" alt="" />
          <p>No LLC Required, No Credit Check</p>
        </div>
        <div className="text-5xl">
          <p>
            Welcome to YourBank
            <br />
            Empowering Your{" "}
            <span className="text-lime-400">
              {" "}
              Financial
              <br />
              Journey
            </span>
          </p>
        </div>
        <div>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower
            <br />
            individuals and businesses to achieve their financial goals. We are
            committed to delivering
            <br />
            personalized and innovative services that prioritize our customers'
            needs.
          </p>
        </div>
        <div>
          <button className="relative overflow-hidden bg-lime-400 py-3 px-5 rounded-3xl text-black cursor-pointer font-bold transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-500 hover:shadow-[0_0_20px_#a3e635] hover:scale-105 active:scale-95 group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-lime-300 opacity-50 transition-all duration-300 ease-out group-hover:translate-x-full"></span>
            <span className="relative z-10">Open Account</span>
          </button>
        </div>
      </div>
      <div>right</div>
    </div>
  );
}
