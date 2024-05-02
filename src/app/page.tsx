"use client"

import Header from "./Header/Header";
import CheckList from "./Dashboard/CheckList";
import NavBar from "./Footer/NavBar";

export default function Home() {

  return (
    <main className="w-full h-full bg-slate-50 flex flex-col gap-10">
      
      <Header/>

      <CheckList/>

      <NavBar/>

    </main>
  );
}
