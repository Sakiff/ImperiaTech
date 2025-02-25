import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div
      className={`${styles.navbar} flex justify-between items-center text-white rounded-3xl p-4 mt-7 mx-5 sm:mx-16`}
    >
      <Link to={"/"}>
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
      </Link>
      <div>
        <Menu className="flex lg:hidden" />
        <ul className="justify-center items-center gap-3 hidden lg:flex">
          <li>
            <NavLink to={"/"} className={`p-3 ${styles.navLink}`}>
              Ana səhifə
            </NavLink>
          </li>
          <li>
            <NavLink to={"about"} className={`p-3 ${styles.navLink}`}>
              Haqqımızda
            </NavLink>
          </li>
          <li>
            <NavLink to={"services"} className={`p-3 ${styles.navLink}`}>
              Xidmətlərimiz
            </NavLink>
          </li>
          <li>
            <NavLink to={"contact"} className={`p-3 ${styles.navLink}`}>
              Əlaqə
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
