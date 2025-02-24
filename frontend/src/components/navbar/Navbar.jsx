import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className={`${styles.navbar} flex justify-around items-center text-white rounded-3xl py-3 mt-7 mx-16`}
    >
      <div className="flex justify-center items-center gap-4">
        <img
          src="/images/Logo.jpg"
          alt="Logo"
          className="w-10 h-10 rounded-2xl"
        />
        <h1 className="text-2xl">
          <strong>
            Imperia<span className="text-[#CAFF34]">Tech</span>
          </strong>
        </h1>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <NavLink to={""} className="p-3">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"careers"} className="p-3">
              Careers
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link to={"signup"}>Sign Up</Link>
          </li>
          <li>
            <Link
              to={"login"}
              className="bg-[#CAFF34] text-gray-950 p-2 rounded-2xl"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
