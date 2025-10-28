"use client"
import { useEffect, useState } from "react"

export default function Button({ darkMode, val }: { darkMode: boolean, val: number }) {
    const [select, setSelect] = useState(false)

    const [scale, setScale] = useState(false)

    useEffect(() => {
        setScale(true)
        const timer = setTimeout(() => setScale(false), 200)
        return () => clearTimeout(timer)
    }, [select])

    return (
        <div onClick={() => setSelect(!select)} className={`relative ${scale ? "scale-[0.92]" : ""} flex items-center justify-center transition-all duration-250 ease-in-out cursor-pointer h-[70px] w-[70px] rounded-full  ${darkMode ? "bg-gray-200/15" : "bg-[#E9E9EB]"}`}>
            <div className={`absolute  top-0 h-[70px] w-[70px] transition-all duration-250 ease-in-out rounded-full ${scale ? "backdrop-blur-xs bg-white/30" : ""}`}></div>

            <div className={`font-semibold text-2xl ${darkMode ? "text-[#999999]" : "text-[#404040]"}`}>{val}</div>
        </div>
    )
}