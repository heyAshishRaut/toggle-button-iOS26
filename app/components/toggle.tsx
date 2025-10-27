"use client"

import { useState, useEffect } from "react"

export default function Toggle() {
    const [turnOn, setTurnOn] = useState(false)
    const [scale, setScale] = useState(false)

    useEffect(() => {
        setScale(true)
        const timer = setTimeout(() => setScale(false), 200)
        return () => clearTimeout(timer)
    }, [turnOn])

    return (
        <div className={`cursor-pointer relative w-16 h-7 rounded-full flex items-center ${turnOn ? "bg-[#34C759]" : "bg-gray-400"}`}>
            <div onClick={() => setTurnOn(false)} className="h-full w-1/2 z-10"></div>
            <div onClick={() => setTurnOn(true)} className="h-full w-1/2 z-10"></div>
            <div
                onClick={() => setTurnOn(!turnOn)}
                style={{
                    transform: scale ? "scale(1.8)" : "scale(1)",
                }}
                className={`absolute h-6 w-[39px] ${scale ? "bg-white/10 backdrop-blur-md" : "bg-white"} rounded-full transition-all duration-100 ease-out z-20 mx-0.5
                    ${turnOn ? "right-0" : "left-0"}`}
            ></div>
        </div>
    )
}

