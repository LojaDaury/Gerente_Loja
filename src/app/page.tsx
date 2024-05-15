"use client"

import Header from "./Header/Header";
import CheckList from "./Dashboard/CheckList";
import NavBar from "./Footer/NavBar";
import { CompletionProvider } from "./hook/useCompletion";

export default function Home() {

  return (
    <main className="w-screen h-screen flex flex-col ">
      
      <CompletionProvider>

        <Header/>

        <CheckList/>

        <NavBar/>

      </CompletionProvider>

    </main>
  );
}
