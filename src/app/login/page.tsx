"use client"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter()

    const [ email, setEmail ] = useState('')

    const [ password, setPassword ] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const [ login, setLogin ] = useState(true)

    function Login(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            router.push('/')
            // ...
        })
        .catch((error) => {
            setLogin(false)
        });
    }

    return (
        <div className="p-10 gap-6 flex flex-col">

            <div className="">

                <label 
                    htmlFor="first_name" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                </label>
                <input 
                    onChange={(val) => setEmail(val.target.value)}
                    value={email}
                    id="first_name" 
                    placeholder="example@gmail.com" 
                    required
                    className="bg-gray-50 border duration-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 outline-none" 
                />

            </div>

            <div className="">

                <label 
                    htmlFor="password" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                > 
                    Password
                </label>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    onChange={(val) => setPassword(val.target.value)}
                    value={password}
                    id="password" 
                    placeholder="•••••••••" 
                    required
                    className="bg-gray-50 border duration-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 outline-none"
                />

            </div>

            <div className="flex justify-center w-full">
                
                <text className={` duration-300 text-sm font-medium ${!login ? 'text-red-500 opacity-100' :'text-white opacity-0'}`}>Emali ou senha inválidos</text>
                
            </div>

            <button 
                onClick={() => Login(email, password)}
                className="bg-yellow-400 text-white text-xl tracking-widest font-extrabold text-center p-2 rounded-lg hover:ring-4 hover:ring-yellow-600 duration-500"
            >
                LOGIN
            </button>

        </div>
    )
}