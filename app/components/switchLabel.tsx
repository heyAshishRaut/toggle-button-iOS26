"use client"

import { useEffect, useState } from "react"

type SwitchLabelProps = {
    darkMode: boolean
    section: number
    setSection: (val: number) => void
    titles: string[]
}

export default function SwitchLabel({ darkMode, section, setSection, titles }: SwitchLabelProps) {

    const [scale, setScale] = useState(false)

    useEffect(() => {
        setScale(true)
        const timer = setTimeout(() => setScale(false), 200)
        return () => clearTimeout(timer)
    }, [section])

    return (
        <div className={`cursor-pointer relative w-[370px] h-9 rounded-full flex items-center px-1 ${darkMode ? "bg-gray-200/15" : "bg-gray-600/20"}`}>
            <div 
                style={{
                    transform: scale ? "scale(1.8)" : "scale(1)",
                }}
                className={`${scale ? "bg-white/60 backdrop-blur-sm" : ""} absolute transition-all duration-400 ease-in-out w-[185px] h-7 ${darkMode ? "bg-white/10" : "bg-gray-600/20"} rounded-full ${section === 0 ? "left-0" : "left-[177px]"} mx-1`}></div>

            <div onClick={() => setSection(0)} className="h-7 w-1/2 flex items-center justify-center">
                <div className={`${section === 0 ? "text-[#0088FF]" : ""}  text-[14px]`}>{titles.at(0)}</div>
            </div>

            <div onClick={() => setSection(1)} className="h-7 w-1/2 flex items-center justify-center">
                <div className={`${section === 1 ? "text-[#0088FF]" : ""} text-[14px]`}>{titles.at(1)}</div>
            </div>
        </div>
    )
}