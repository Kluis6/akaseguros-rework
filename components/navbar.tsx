"use client";
import { Navigation } from "./Navigation.impl";

import Link from "next/link";
import { SideMenu } from "./sidemenu";

export default function Navbar() {
  return (
    <div className="w-full bg-blue-brand py-2 md:py-4">
      <div className="w-full px-4 lg:px-8 flex justify-between items-center">
        <div className="flex flex-col ">
          <h1 className="text-2xl/relaxed leading-none text-white">akad</h1>
          <small className="uppercase text-[8px] text-end text-white">seguros</small>
        </div>
        <Navigation />

        <Link
          href=""
          className="md:text-sm text-xs hidden lg:flex flex-none font-semibold text-white py-2 px-4 rounded-lg bg-pink-brand hover:bg-pink-700 active:bg-pink-800"
        >
          Encontre um corretor
        </Link>
        <SideMenu />
      </div>
    </div>
  );
}
