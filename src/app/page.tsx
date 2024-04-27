import { IoPersonCircle } from "react-icons/io5";
import medalha from '../../public/medalha (1).png';
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex flex-col gap-10">
      
      <div className="h-20 bg-">
        Gerente
      </div>

      <div className="px-10 w-full">

        <div className="w-full group ">
          
          <div className="w-full h-3 flex bg-gray-300 rounded-full shadow-sm_gray">
            
            <div className="w-1/5 group-hover:w-3/5 duration-700 flex bg-yellow-500 rounded-full text-yellow-500 shadow-sm_yellow"/>

          </div>

          <div className=" ml-4 mt-2 duration-700 group-hover:w-3/5 w-1/5 flex justify-end">
            
            <div className="flex flex-col items-center">
              <text className="text-yellow-500 font-black">20%</text>

              <div className="shadow-sm_yellow rounded-full">
                <IoPersonCircle size={40} className="text-yellow-500"/>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="flex  p-10">

        <div className="flex flex-col items-center">
          
          <div className="flex shadow-sm_gray p-4 rounded-xl z-10 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
            <text className="font-black drop-shadow-md text-white">Fachada da Loja</text>
          </div>

          <Image alt="" src={medalha} className="w-14 h-14 -mt-2"/>
        </div>
      </div>

    </main>
  );
}
