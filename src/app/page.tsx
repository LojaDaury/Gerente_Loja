"use client"

import { IoPersonCircle } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import medalha from '../../public/medalha (1).png';
import sun_happy from '../../public/sun_happy.svg';
import sun_sad from '../../public/sun_sad.svg';

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const videoRef = useRef(null)
  const photoRef = useRef(null)

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 }
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch( err => {
        console.error(err);
      })
  }

  const takePhoto = () => {
    const width = 414;
    const height = width / (16/9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
  }

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearReact(0, 0, photo.whidth, photo.height);
    
  }

  useEffect( () => {
    getVideo();
  }, [videoRef]);

  return (
    <main className="w-full h-full bg-slate-50 flex flex-col gap-10">
      
      <div className="">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
        <canvas ref={photoRef}></canvas>
      </div>

      <div className="h-20 flex justify-between p-4">
        
        <div className="flex items-center justify-center gap-6">
          <div className=" flex items-center">
            <div className="text-yellow-500">
              <IoPersonCircle size={50}/>
            </div>

            <div className="p-2 px-4 rounded-full bg-yellow-400 text-lg font-bold text-white">
              Karolaine
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
