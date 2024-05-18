"use client"

import Header from "./Header/Header";
import CheckList from "./Dashboard/CheckList";
import NavBar from "./Footer/NavBar";
import { CompletionProvider } from "./hook/useCompletion";
import { DataUserProvider } from "./hook/useDataUser";

export default function Home() {

  return (
    <main className="w-screen h-screen flex flex-col ">
      
      <CompletionProvider>

        <DataUserProvider>

          <Header/>

          <CheckList/>

          <NavBar/>

        </DataUserProvider>

      </CompletionProvider>

    </main>
  );
}
