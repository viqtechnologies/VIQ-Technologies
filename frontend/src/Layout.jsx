
// Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "./Apipath.jsx"

const Layout = () => {

  useEffect(() => {

    const cached = localStorage.getItem("server-status");

    // if already cached
    if (cached) {
      console.log("Cached:", cached);
      return;
    }

    const getStatus = async () => {
      try {
        const res = await axios.get(`${BASE_URL}`);

        console.log("API Response:", res.data);

        localStorage.setItem("server-status", res.data);

      } catch (error) {
        console.log(error);
      }
    };

    getStatus();

  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
