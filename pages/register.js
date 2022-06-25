import React, { useState } from "react"
import { useRouter } from 'next/router'
import { register } from '../lib/api'

const Register = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({ fullName: false, email: false, pass: false })

    const handleSignup = () => {
        if (!fullName || !email || !password) {
            !fullName && setError(prev => ({...prev, fullName: true}))
            !email && setError(prev => ({...prev, email: true}))
            !password && setError(prev => ({...prev, pass: true}))
        } else {
            const data = {fullname: fullName, email, password}
            register(data).then(res => {
                setError({ fullName: false, pass: false, email: false })
                router.push('/login')
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className="w-full h-screen bg-slate-100 flex-col lg:flex-row flex items-center">
            <div className="w-1/2 h-full hidden lg:flex items-center justify-center">
                <img className="w-[32rem] h-[35rem]" src="/images/Illustration-login.png" alt="" />
            </div>
            <div className="w-[90%] lg:w-[45%] h-[90%] bg-white rounded-lg mt-10 lg:mt-0">
                <div className="p-14">
                    <h4 className="font-semibold text-xl">Register</h4>
                    <h1 className="font-bold text-3xl text-dark-violet mt-1">Joy Games</h1>
                    <h4 className="font-semibold text-xl">Account</h4>
                </div>
                <div className="px-14">
                    <div className="w-full h-16 shadow-md flex items-center justify-center cursor-pointer rounder">
                        <img className="w-5 h-5 mr-4" src="/images/google-icon.png" alt="" />
                        <span>Signup with Google</span>
                    </div>
                    <div className="w-full h-16 shadow-md flex items-center justify-center mt-5 cursor-pointer rounded">
                        <img className="w-3 h-6 mr-4" src="/images/fb-icon.png" alt="" />
                        <span>Signup with Facebook</span>
                    </div>
                </div>
                <div className="px-14 mt-12">
                    <div className={`w-full h-16 bg-slate-200 rounded flex ${!error.fullName ? 'mb-5' : 'mb-3'}`}>
                        <div className="w-[5rem] h-full flex items-center justify-center">
                            <img className="w-10 h-10" src="/images/name-icon.png" alt="" />
                        </div>
                        <div className="w-full h-full flex flex-col items-start justify-center">
                            <span className="text-xs">Fullname</span>
                            <input
                                className="w-full pr-5 bg-transparent outline-none"
                                placeholder="input your fullname"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                    {error.fullName && <span className="text-red-500 text-xs">please input fullname</span>}
                    <div className={`w-full h-16 bg-slate-200 rounded flex ${!error.email ? 'mb-5' : 'mb-3'} mt-3`}>
                        <div className="w-[5rem] h-full flex items-center justify-center">
                            <img className="w-8 h-7" src="/images/email-icon.png" alt="" />
                        </div>
                        <div className="w-full h-full flex flex-col items-start justify-center">
                            <span className="text-xs">Email</span>
                            <input
                                className="w-full pr-5 bg-transparent outline-none"
                                placeholder="input your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {error.email && <span className="text-red-500 text-xs">please input email</span>}
                    <div className="w-full h-16 bg-slate-200 rounded flex my-3">
                        <div className="w-[5rem] h-full flex items-center justify-center">
                            <img className="w-6 h-6" src="/images/pass-icon.png" alt="" />
                        </div>
                        <div className="w-full h-full flex flex-col items-start justify-center">
                            <span className="text-xs">Password</span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full bg-transparent outline-none"
                                placeholder="input your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="w-[5rem] h-full flex items-center justify-center">
                            <img
                                onClick={() => setShowPassword(!showPassword)}
                                className="w-5 h-[1rem] cursor-pointer"
                                src="/images/seepass-icon.png"
                                alt=""
                            />
                        </div>
                    </div>
                    {error.pass && <span className="text-red-500 text-xs">please input password</span>}
                </div>
                <div className="px-14 mt-6">
                    <div
                        className="w-full h-14 bg-dark-violet rounded flex items-center justify-center text-white cursor-pointer"
                        onClick={() => handleSignup()}
                    >
                        <span className="text-lg">Signup</span>
                    </div>
                </div>
                <div className="px-14 mt-10">
                    <span className="cursor-pointer hover:underline" onClick={() => router.push('/')}>
                        back to home
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register