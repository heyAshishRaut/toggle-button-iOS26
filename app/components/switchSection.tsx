"use client"

import { select } from "framer-motion/client"
import { useEffect, useState } from "react"

type SwitchSectionLabel = {
    darkMode: boolean
}

export default function SwitchSection({darkMode}: SwitchSectionLabel) {
    const [select, setSelect] = useState(0)
    const [scale, setScale] = useState(false)
    
    useEffect(() => {
        setScale(true)
        const timer = setTimeout(() => setScale(false), 200)
        return () => clearTimeout(timer)
    }, [select])

    return (
        <div className={`relative cursor-pointer h-[62px] w-[202px] rounded-full ${darkMode ? " bg-gray-100/15" : "bg-gray-600/20"} flex items-center px-1`}>
            <div
                style={{
                    transform: scale ? "scale(1.6)" : "scale(1)",
                }}
                className={`${scale ? "bg-white/60 backdrop-blur-sm" : ""} transiton-all duration-400 ease-in-out absolute h-[54px] w-[102px] rounded-full ${darkMode ? "bg-white/10" : "bg-gray-600/20"} mx-1 ${select === 0 ? "left-0" : "left-[92px]"}`}></div>
            
            <div onClick={() => setSelect(0)} className={` transiton-all duration-200 h-[54px] w-1/2 flex flex-col items-center justify-center gap-y-0.5`}>
                <div>
                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23682 14.7671C0.42334 13.9591 0.0138346 13.1374 0.00830078 12.3018C0.00276693 11.4661 0.403971 10.6471 1.21191 9.84473L9.85303 1.22021C10.6554 0.406738 11.4744 0.00276693 12.3101 0.00830078C13.1457 0.00830078 13.9674 0.415039 14.7754 1.22852L23.375 9.82812C24.1829 10.6361 24.5869 11.4606 24.5869 12.3018C24.5924 13.1374 24.194 13.9564 23.3916 14.7588L14.7671 23.3916C13.9591 24.194 13.1374 24.5924 12.3018 24.5869C11.4661 24.5869 10.6444 24.1802 9.83643 23.3667L1.23682 14.7671Z" fill={select === 0 ? "#0088FF" : darkMode ? "#FFFFFF" : "#000000"} />
                    </svg>
                </div>
                <div className={`${select === 0 ? "text-[#0088FF]" : ""} text-[12px]`}>Label</div>
            </div>

            <div onClick={() => setSelect(1)} className={` transiton-all duration-200 ease-in-out h-[54px] w-1/2 flex flex-col items-center justify-center gap-y-0.5`}>
                <div>
                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23682 14.7671C0.42334 13.9591 0.0138346 13.1374 0.00830078 12.3018C0.00276693 11.4661 0.403971 10.6471 1.21191 9.84473L9.85303 1.22021C10.6554 0.406738 11.4744 0.00276693 12.3101 0.00830078C13.1457 0.00830078 13.9674 0.415039 14.7754 1.22852L23.375 9.82812C24.1829 10.6361 24.5869 11.4606 24.5869 12.3018C24.5924 13.1374 24.194 13.9564 23.3916 14.7588L14.7671 23.3916C13.9591 24.194 13.1374 24.5924 12.3018 24.5869C11.4661 24.5869 10.6444 24.1802 9.83643 23.3667L1.23682 14.7671Z" fill={select === 1 ? "#0088FF" : darkMode ? "#FFFFFF" : "#000000"} />
                    </svg>
                </div>
                <div className={`${select === 1 ? "text-[#0088FF]" : ""} text-[12px]`}>Label</div>
            </div>
        </div>
    )
}