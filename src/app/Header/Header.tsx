import { IoMenu, IoPersonCircle } from "react-icons/io5";

import sun_happy from '../Assets/sun_happy.svg';
import sun_sad from '../Assets/sun_sad.svg';

import Image from "next/image";
import { CompletionContext } from "../hook/useCompletion";
import { createContext, useContext, useState } from "react";
import { auth } from "../services/firebaseConfig";
import { DataUserContext } from "../hook/useDataUser";

export default function Header() {

    const { userData } = useContext(DataUserContext)

    const {completionPercentage} = useContext(CompletionContext)

    return (

        <div className="shadow-sm_gray flex flex-col z-10">

            <div className="h-16 flex justify-between p-4  z-10">
            
                <div className="flex items-center justify-center gap-6">

                    <div className=" flex items-center">
                        <div className="text-yellow-500">
                            <IoPersonCircle size={50}/>
                        </div>

                        <div className="p-2 px-4 rounded-full bg-yellow-400 text-lg font-bold text-white">
                            {userData.nome}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <text className="text-3xl font-black text-gray-500">5</text>

                        <div className="w-10 h-10">
                            <Image src={sun_sad} alt=""/>
                        </div>
                    </div>

                </div>

                <div className="text-yellow-400">
                    <IoMenu size={42}/>
                </div>

            </div>

            <div className=" pt-10 py-4 bg-white px-10">
                    
                <div className="w-full h-5 flex bg-gray-300 rounded-full ">
                    
                    <div style={{ width: `${completionPercentage}%` }} className={`duration-700  relative bg-yellow-500 rounded-full text-yellow-500`}>

                        <div style={{ width: `${completionPercentage}%` }} className="h-[5px] mt-[4px] ml-4 bg-yellow-200/90 rounded-full"/>

                        <div className="flex absolute -right-4 -top-3 flex-col items-center ">
                            
                            <div className=" bg-white flex rounded-full">
                                <IoPersonCircle size={40} className="text-yellow-500"/>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}