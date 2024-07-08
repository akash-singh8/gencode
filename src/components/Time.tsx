"use client";
import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const currTime = new Date().toString().split("GMT")[0];
      setTime(currTime);
    }, 1000);
  }, []);

  return <p>{time}</p>;
};

export default Time;
