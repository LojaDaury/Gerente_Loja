"use client"

import Header from "./Header/Header";
import CheckList from "./Dashboard/CheckList";
import NavBar from "./Footer/NavBar";

export default function Home() {

  return (
    <main className="w-screen h-screen flex flex-col">
      
      <Header/>

      <CheckList/>

      <NavBar/>

    </main>
  );
}
