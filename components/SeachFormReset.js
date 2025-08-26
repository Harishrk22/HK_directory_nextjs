"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SeachFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form");
    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white ">
        <X />
      </Link>
    </button>
  );
};

export default SeachFormReset;
