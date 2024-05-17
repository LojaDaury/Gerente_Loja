import { useContext, useEffect, useRef, useState } from "react";

import { IoTrash, IoCheckmark  } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import Image from "next/image";

import medalha from '../Assets/medalha (1).png';

import { CompletionContext } from "../hook/useCompletion";

import { auth, storage } from "../services/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";


export default function CheckList() {

    const router = useRouter()

    const [cam, setCam] = useState(false)

    const [user, setUser] = useState<string|null>('')

    const [hasPhoto, setHasPhoto] = useState(false)

    const [ workChecked, setWorkChecked ] = useState({
        name: '',
        id: 0
    })

    const {createCompletionPercentage} = useContext(CompletionContext)

    const videoRef = useRef<HTMLVideoElement>(null)
    const photoRef = useRef<HTMLCanvasElement>(null)

    const getVideo = () => {

        setHasPhoto(false)
        
        navigator.mediaDevices
        .getUserMedia({
            video: { facingMode: 'environment', width: innerHeight, height: innerWidth }
        })
        .then(stream => {
            if (videoRef.current) {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            }
        })
        .catch( err => {
            console.error(err);
        })

        setCam(true)
    }

    const takePhoto = () => {
        
        setHasPhoto(true)

        const width = innerWidth;
        const height = innerHeight;

        if (photoRef.current && videoRef.current) {
            let video = videoRef.current;
            let photo = photoRef.current;

            photo.width = width;
            photo.height = height;
        
            let ctx = photo.getContext('2d');

            if (ctx) {
                ctx.drawImage(video, 0, 0, width, height);

            }
        }

    }

    const uploadPhotoToStorage = async () => {
        const today = new Date()
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const formattedDate = `${day < 10 ? ('0' + day) : day}_${month < 10 ? ('0' + month) : month}`;

        const storageRef = ref(storage, `1/${formattedDate}/${workChecked.name}.jpg`);


        if (photoRef.current) {
            photoRef.current.toBlob( blob => {
                if (blob) {
                    uploadBytes(storageRef, blob).then(
                        (snapshot) => {
                            console.log('Uploaded a blob or file!');
                        }
                    );
                }
            })
        }
    };

    const [ list, setList ] = useState([
        {
            name: 'Fachada da Loja',
            check: false,
            description: '',
            image: ''
        },
        {
            name: 'Vitrine',
            check: false,
            description: '',
            image: ''
        },
        {
            name: 'Calçado Masc',
            check: false,
            description: '',
            image: ''
        },
        {
            name: 'Calçado Fem',
            check: false,
            description: '',
            image: ''
        },
        {
            name: 'Calçado Inf',
            check: false,
            description: '',
            image: ''
        },
    ])

    const HandleCheck = () => {
        setCam(false)

        uploadPhotoToStorage()

        setList(prevList => {
            const newList = [...prevList]; // Criando uma cópia do array original
            newList[workChecked.id] = { ...newList[workChecked.id], check: true }; // Modificando o objeto desejado
        
            const checkedCount = newList.filter(item => item.check).length; // Usando a lista atualizada
            const totalItems = newList.length;
            const percentage = (checkedCount / totalItems) * 100;
            createCompletionPercentage(percentage);
        
            return newList; // Retornando a nova lista atualizada
        });
        
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user.displayName)
          } else {
            if ( usePathname() !== '/login') {
                router.push('/login');
            }
          }
        });
    
        return () => unsubscribe();
      }, [router]); 

    return (

        <div className="px-10  w-full h-full overflow-y-scroll ">

            {   (cam == true) ? (
                    <div className="absolute left-0 top-0 right-0 bottom-0 overflow-hidden bg-black z-20">
                        
                        <div className="w-screen h-screen absolute top-10 right-0 bottom-0 left-0">
                            <video ref={videoRef} className=" w-screen h-screen"></video>
                        </div>

                        <div className={`absolute top-10 right-0 bottom-0 duration-500 ${ hasPhoto ? 'left-0': '-left-[1999px]'}`}>
                            <canvas ref={photoRef} 
                            className={``}/>
                        </div>
                        
                        <button onClick={() => {setCam(false)}} 
                            className="absolute top-6 left-6 bg-white text-black rounded-full duration-200 hover:top-5 hover:left-7">
                            <IoIosClose size={40}/>        
                        </button>
                        
                        <div className="flex justify-center items-end gap-6 absolute bottom-6 left-0 right-0">

                            <button disabled={!hasPhoto} onClick={() => HandleCheck()} 
                                className={` hover:bg-gray-400 duration-500 
                                    border-2 border-white p-2 
                                    rounded-full ${hasPhoto?'bg-green-400 text-white hover:bg-green-600': 'bg-white text-black'}`}>
                                <IoCheckmark  size={28}/>
                            </button>

                            <button onClick={() => takePhoto()} 
                                className="bg-gray-600 hover:bg-gray-300 duration-500 
                                    border-4 border-gray-300 hover:border-gray-600 w-16 h-16 
                                    rounded-full"/>

                            <button onClick={() => setHasPhoto(false)} 
                                className="bg-white hover:bg-gray-400 duration-500 
                                    border-2 border-white hover:border-white p-2 
                                    rounded-full">
                                <IoTrash size={28}/>
                            </button>

                        </div>

                    </div>
                ) : (
                    <div/>
                )
            }

            <div className="flex flex-col p-10 pb-20 gap-16">

                

                { list.map( (val, id) => (
                    <div key={id} className="flex flex-col relative items-center">
                
                        <button
                            onClick={() => {getVideo(), setWorkChecked({name:val.name, id:id})}} 
                            className={`
                                flex w-48 justify-center  p-4 rounded-xl  duration-500 delay-500  
                                ${val.check
                                    ? 'bg-yellow-400 text-white border-b-4 border-yellow-600 shadow-sm_yellow animate-jump animate-delay-500 animate-duration-[1500ms]'
                                    : 'bg-gray-100 border-b-4 border-gray-500 text-gray-700 shadow-sm_gray'
                                }`}
                        >
                            <text className="font-black drop-shadow-md ">{val.name}</text>
                        </button>

                        <Image alt="" src={medalha} className={`w-14 h-14 -z-10 delay-500 duration-500 absolute ${val.check?'-bottom-12':'-bottom-0'}`}/>
                    </div>
                ))}

            </div>
           
        </div>

    )
}