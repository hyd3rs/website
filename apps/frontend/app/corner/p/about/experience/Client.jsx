"use client";

import gleam from "./lucy.svg";
import Image from "next/image";

export const Gleam = () => (
  <Image src={gleam} alt="Gleam logo" className="w-4 h-4" />
);
