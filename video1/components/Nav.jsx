import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center text-xl bg-blue-500 p-4">
      <h2>Sheriyans</h2>
      <div className="flex gap-5 text-center justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
