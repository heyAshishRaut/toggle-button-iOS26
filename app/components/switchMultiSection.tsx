"use client"
import { useEffect, useState } from "react"

type SwitchSectionLabel = {
    darkMode: boolean
}

export default function SwitchMultiSection({ darkMode }: SwitchSectionLabel) {
    const [select, setSelect] = useState(0)
    const [scale, setScale] = useState(false)

    useEffect(() => {
        setScale(true)
        const timer = setTimeout(() => setScale(false), 200)
        return () => clearTimeout(timer)
    }, [select])

    return (
        <div className={`text-[11px] md:text-[12px] relative cursor-pointer h-[66px] w-[306px] rounded-full ${darkMode ? " bg-gray-100/15" : "bg-gray-600/20"} flex items-center p-1`}>
            <div
                style={{
                    transform: scale ? "scale(1.5)" : "scale(1)",
                }}
                className={`${scale ? "backdrop-blur-sm bg-white/60" : ""} transiton-all duration-400 ease-in-out absolute h-[58px] w-[92px] rounded-full ${darkMode ? "bg-white/10" : "bg-gray-600/20"} mx-1 ${select === 0 ? "left-0" : select === 1 ? "left-[68px]" : select === 2 ? "left-[138px]" : "left-[206px]"}`}>
            </div>

            <div onClick={() => setSelect(0)} className={`h-full transition-all duration-200 ease-in-out ${select === 0 ? "w-[92px]" : "w-[72px]"} rounded-full flex flex-col gap-y-0.5 items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color={select === 0 ? "#0088FF" : darkMode ? "#FFF" : "#000"} fill={select === 0 ? "#0088FF" : darkMode ? "#FFF" : "#000"}>
                    <path d="M22 10.5L12.8825 2.82207C12.6355 2.61407 12.3229 2.5 12 2.5C11.6771 2.5 11.3645 2.61407 11.1175 2.82207L2 10.5" stroke={select === 0 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.5 9.5V16C20.5 18.3456 20.5 19.5184 19.8801 20.3263C19.7205 20.5343 19.5343 20.7205 19.3263 20.8801C18.5184 21.5 17.3456 21.5 15 21.5V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V21.5C6.65442 21.5 5.48164 21.5 4.67372 20.8801C4.46572 20.7205 4.27954 20.5343 4.11994 20.3263C3.5 19.5184 3.5 18.3456 3.5 16V9.5" stroke={select === 0 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={`${select === 0 ? "text-[#0088FF]" : ""}`}>Home</div>
            </div>

            <div onClick={() => setSelect(1)} className={`h-full transition-all duration-200 ease-in-out ${select === 1 ? "w-[92px]" : "w-[72px]"} rounded-full flex flex-col gap-y-0.5 items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color={select === 1 ? "#0088FF" : darkMode ? "#FFF" : "#000"} fill={select === 1 ? "#0088FF" : darkMode ? "#FFF" : "#000"}>
                    <path d="M1.99934 14L1.99935 13.4999C1.99935 10.2 1.99936 8.55012 3.02448 7.525C4.04961 6.49988 5.69952 6.49988 8.99935 6.49988H15.0005C18.2999 6.49988 19.9495 6.49988 20.9746 7.5248C21.9997 8.54971 22 10.1994 22.0005 13.4987L22.0006 13.999C22.0012 17.2994 22.0015 18.9496 20.9763 19.9749C19.9511 21.0003 18.3009 21.0002 15.0005 21.0002L8.99919 21C5.69941 21 4.04953 20.9999 3.02443 19.9748C1.99933 18.9497 1.99934 17.2998 1.99934 14Z" stroke={select === 1 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.49934 6.49988C8.49934 5.09542 8.49934 4.39318 8.8364 3.88874C8.98232 3.67036 9.16982 3.48286 9.3882 3.33694C9.89265 2.99988 10.5949 2.99988 11.9993 2.99988C13.4038 2.99988 14.106 2.99988 14.6105 3.33694C14.8289 3.48286 15.0164 3.67036 15.1623 3.88874C15.4993 4.39318 15.4993 5.09542 15.4993 6.49988" stroke={select === 1 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.99924 10.4999H17.9992" stroke={ darkMode ? "#000" : "#FFF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={`${select === 1 ? "text-[#0088FF]" : ""}`}>Exper..</div>
            </div>

            <div onClick={() => setSelect(2)} className={`h-full transition-all duration-200 ease-in-out ${select === 2 ? "w-[92px]" : "w-[72px]"} rounded-full flex flex-col gap-y-0.5 items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color={select === 2 ? "#0088FF" : darkMode ? "#FFF" : "#000"} fill={select === 2 ? "#0088FF" : darkMode ? "#FFF" : "#000"}>
                    <path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke={select === 2 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 16H11.5" stroke={select === 2 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 16L18 16" stroke={select === 2 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 9H22" stroke={darkMode ? "#000" : "#FFF"} strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <div className={`${select === 2 ? "text-[#0088FF]" : ""}`}>Projects</div>
            </div>

            <div onClick={() => setSelect(3)} className={`h-full transition-all duration-200 ease-in-out ${select === 3 ? "w-[92px]" : "w-[72px]"} rounded-full flex flex-col gap-y-0.5 items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color={select === 3 ? "#0088FF" : "#FFF"} fill={select === 3 ? "#0088FF" : darkMode ? "#FFF" : "#000"}>
                    <path d="M19.7502 11V10C19.7502 6.22876 19.7502 4.34315 18.5786 3.17157C17.407 2 15.5214 2 11.7502 2H10.7503C6.97907 2 5.09346 2 3.92189 3.17156C2.75032 4.34312 2.7503 6.22872 2.75027 9.99993L2.75024 14C2.7502 17.7712 2.75019 19.6568 3.92172 20.8284C5.09329 21.9999 6.97897 22 10.7502 22" stroke={select === 3 ? "#0088FF" : darkMode ? "#FFF" : "#000"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.25024 7H15.2502M7.25024 12H15.2502" stroke={darkMode ? "#000" : "#FFF"} strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M13.2502 20.8268V22H14.4236C14.833 22 15.0377 22 15.2217 21.9238C15.4058 21.8475 15.5505 21.7028 15.84 21.4134L20.6636 16.5894C20.9366 16.3164 21.0731 16.1799 21.1461 16.0327C21.285 15.7525 21.285 15.4236 21.1461 15.1434C21.0731 14.9961 20.9366 14.8596 20.6636 14.5866C20.3905 14.3136 20.254 14.1771 20.1067 14.1041C19.8265 13.9653 19.4975 13.9653 19.2173 14.1041C19.0701 14.1771 18.9335 14.3136 18.6605 14.5866L18.6605 14.5866L13.8369 19.4106C13.5474 19.7 13.4027 19.8447 13.3265 20.0287C13.2502 20.2128 13.2502 20.4174 13.2502 20.8268Z" stroke={darkMode ? "#000" : "#FFF"} strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <div className={`${select === 3 ? "text-[#0088FF]" : ""}`}>Blogs</div>
            </div>
        </div>
    )
}