"use client"
"use client"
import { motion } from "framer-motion"

type DialogBoxProps = {
    darkMode: boolean
    setDialog: (val: boolean) => void
}

export default function DialogBox({darkMode, setDialog}: DialogBoxProps) {
    return (
        <motion.div className={`relative w-[300px] h-[354px] rounded-[36px] flex flex-col gap-y-2.5 p-3.5 border ${darkMode ? "bg-neutral-800 border-gray-300/10" : "bg-white border-gray-400/20" }`}>
            <div className="h-[152px] w-[272px] flex flex-col gap-y-2.5 p-2">
                <div className="font-semibold">Toggles Would Like to Send You Notifications</div>
                <div className="text-gray-400">Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.</div>
            </div>

            <div className="h-[164px] w-[272px] flex flex-col gap-y-2.5">
                <div onClick={() => setDialog(false)} className={`cursor-pointer w-full h-12 ${darkMode ? "bg-gray-200/15" : "bg-[#E9E9EB]"} rounded-full flex items-center justify-center`}>Allow</div>
                <div onClick={() => setDialog(false)} className={`cursor-pointer w-full h-12 ${darkMode ? "bg-gray-200/15" : "bg-[#E9E9EB]"} rounded-full flex items-center justify-center`}>Allow in Scheduled Summary</div>
                <div onClick={() => setDialog(false)} className={`cursor-pointer w-full h-12 bg-[#0088FF] text-white rounded-full flex items-center justify-center`}>Don't Allow</div>
            </div>
        </motion.div>
    )
}
