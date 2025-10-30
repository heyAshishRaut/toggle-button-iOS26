"use client"
import { useEffect, useState } from "react"
import Toggle from "./components/toggle"
import SwitchLabel from "./components/switchLabel"
import SwitchSection from "./components/switchSection"
import SwitchLabelV2 from "./components/switchLabelV2"
import Button from "./components/button"
import ButtonLarge from "./components/buttonLarge"
import SuperellipseTile from "./components/dialogBox"
import { div } from "framer-motion/client"
import DialogBox from "./components/dialogBox"
import { AnimatePresence, motion } from "framer-motion"
import SwitchMultiSection from "./components/switchMultiSection"


export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    const [focusMode, setFocusMode] = useState(false)
    const [notifications, setNotifications] = useState(false)

    
    const [section1, setSection1] = useState(0)
    const [section2, setSection2] = useState(0)
    const titles = ["Featured", "All"]

    const [dialog, setDialog] = useState(false)

    return (
        <div className={`min-h-screen w-screen selection:bg-gray-400/20 py-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"} flex flex-col gap-y-10 items-center justify-center`}>
            

            
            {/* DarkMode */}
            <Toggle turnOn={darkMode} setTurnOn={setDarkMode} />

            {/* Toggle Button */}
            <div className={`h-[104px] w-[370px] ${darkMode ? "bg-gray-200/15" : "bg-[#E9E9EB]"} rounded-4xl flex flex-col px-4 text-[15px]`}>
                {/* FocusMode */}
                <div className={`h-13 w-full border-b ${darkMode ? 'border-white/10' : 'border-[#D6D6D8]'} flex items-center justify-between`}>
                    <div className="flex items-center">
                        <svg className="-ml-2" width="45" height="45" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M25.7104 42.8037C24.6525 42.8037 23.6637 42.6084 22.7441 42.2178C21.8245 41.819 21.0148 41.2738 20.3149 40.582C19.6151 39.8822 19.0658 39.0724 18.667 38.1528C18.2764 37.2251 18.0811 36.2363 18.0811 35.1865C18.0811 34.1367 18.2764 33.152 18.667 32.2324C19.0658 31.3128 19.6151 30.5031 20.3149 29.8032C21.0148 29.1034 21.8245 28.5581 22.7441 28.1675C23.6637 27.7687 24.6525 27.5693 25.7104 27.5693C26.7603 27.5693 27.745 27.7687 28.6646 28.1675C29.5841 28.5581 30.3898 29.1034 31.0815 29.8032C31.7814 30.5031 32.3267 31.3128 32.7173 32.2324C33.116 33.152 33.3154 34.1367 33.3154 35.1865C33.3154 36.2363 33.116 37.2251 32.7173 38.1528C32.3267 39.0724 31.7814 39.8822 31.0815 40.582C30.3898 41.2738 29.5841 41.819 28.6646 42.2178C27.745 42.6084 26.7603 42.8037 25.7104 42.8037ZM25.7104 40.7407C26.4673 40.7407 27.1794 40.5983 27.8467 40.3135C28.5221 40.0205 29.1121 39.6217 29.6167 39.1172C30.1294 38.6045 30.5282 38.0145 30.813 37.3472C31.106 36.6717 31.2524 35.9515 31.2524 35.1865C31.2524 34.4215 31.106 33.7054 30.813 33.0381C30.5282 32.3626 30.1294 31.7726 29.6167 31.2681C29.1121 30.7554 28.5221 30.3566 27.8467 30.0718C27.1794 29.7788 26.4673 29.6323 25.7104 29.6323C24.9373 29.6323 24.2131 29.7788 23.5376 30.0718C22.8703 30.3566 22.2803 30.7554 21.7676 31.2681C21.263 31.7726 20.8643 32.3626 20.5713 33.0381C20.2865 33.7054 20.144 34.4215 20.144 35.1865C20.144 35.9515 20.2865 36.6717 20.5713 37.3472C20.8643 38.0226 21.263 38.6167 21.7676 39.1294C22.2803 39.634 22.8703 40.0286 23.5376 40.3135C24.2131 40.5983 24.9373 40.7407 25.7104 40.7407ZM44.3018 42.8037C43.2438 42.8037 42.255 42.6084 41.3354 42.2178C40.4159 41.819 39.6061 41.2738 38.9062 40.582C38.2064 39.8822 37.6571 39.0724 37.2583 38.1528C36.8677 37.2251 36.6724 36.2363 36.6724 35.1865C36.6724 34.1367 36.8677 33.152 37.2583 32.2324C37.6571 31.3128 38.2064 30.5031 38.9062 29.8032C39.6061 29.1034 40.4159 28.5581 41.3354 28.1675C42.255 27.7687 43.2438 27.5693 44.3018 27.5693C45.3516 27.5693 46.3363 27.7687 47.2559 28.1675C48.1755 28.5581 48.9811 29.1034 49.6729 29.8032C50.3727 30.5031 50.918 31.3128 51.3086 32.2324C51.7074 33.152 51.9067 34.1367 51.9067 35.1865C51.9067 36.2363 51.7074 37.2251 51.3086 38.1528C50.918 39.0724 50.3727 39.8822 49.6729 40.582C48.9811 41.2738 48.1755 41.819 47.2559 42.2178C46.3363 42.6084 45.3516 42.8037 44.3018 42.8037ZM44.3018 40.7407C45.0667 40.7407 45.7829 40.5983 46.4502 40.3135C47.1257 40.0286 47.7157 39.634 48.2202 39.1294C48.7329 38.6167 49.1317 38.0226 49.4165 37.3472C49.7013 36.6717 49.8438 35.9515 49.8438 35.1865C49.8438 34.4215 49.7013 33.7054 49.4165 33.0381C49.1317 32.3626 48.7329 31.7726 48.2202 31.2681C47.7157 30.7554 47.1257 30.3566 46.4502 30.0718C45.7829 29.7788 45.0667 29.6323 44.3018 29.6323C43.5286 29.6323 42.8044 29.7788 42.1289 30.0718C41.4616 30.3566 40.8716 30.7554 40.3589 31.2681C39.8543 31.7726 39.4556 32.3626 39.1626 33.0381C38.8778 33.7054 38.7354 34.4215 38.7354 35.1865C38.7354 35.9515 38.8778 36.6717 39.1626 37.3472C39.4556 38.0145 39.8543 38.6045 40.3589 39.1172C40.8716 39.6217 41.4616 40.0205 42.1289 40.3135C42.8044 40.5983 43.5286 40.7407 44.3018 40.7407ZM18.8867 33.6851V36.0288H16.6528C16.0425 36.0288 15.7373 35.7196 15.7373 35.1011V34.6006C15.7373 33.9902 16.0425 33.6851 16.6528 33.6851H18.8867ZM51.1011 36.0288V33.6851H53.3472C53.9494 33.6851 54.2505 33.9902 54.2505 34.6006V35.1011C54.2505 35.7196 53.9494 36.0288 53.3472 36.0288H51.1011ZM32.7173 35.626V33.4165C33.0591 33.2537 33.4375 33.1398 33.8525 33.0747C34.2676 33.0015 34.6501 32.9648 35 32.9648C35.3418 32.9648 35.7202 33.0015 36.1353 33.0747C36.5503 33.1398 36.9328 33.2537 37.2827 33.4165V35.626C36.9735 35.4388 36.6154 35.2964 36.2085 35.1987C35.8016 35.1011 35.3988 35.0522 35 35.0522C34.5931 35.0522 34.1862 35.1011 33.7793 35.1987C33.3805 35.2964 33.0265 35.4388 32.7173 35.626Z" fill={darkMode ? "#FFFFFF" : '#333333'} />
                            </g>
                        </svg>
                        <div className="-ml-1">Focus Mode</div>
                    </div>
                    <Toggle turnOn={focusMode} setTurnOn={setFocusMode} />
                </div>

                {/* Notifications */}
                <div className="h-13 w-full border-b border-transparent flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="-ml-2" width="45" height="45" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M26.6382 47.0518C26.3859 46.8646 26.2313 46.6123 26.1743 46.2949C26.1255 45.9775 26.1784 45.5991 26.333 45.1597L28.8843 37.5669L22.3657 32.8794C21.9832 32.6108 21.7188 32.3341 21.5723 32.0493C21.4258 31.7645 21.4014 31.4715 21.499 31.1704C21.5967 30.8774 21.7879 30.6577 22.0728 30.5112C22.3576 30.3647 22.736 30.2956 23.208 30.3037L31.2036 30.3525L33.6328 22.7231C33.7793 22.2756 33.9624 21.9378 34.1821 21.71C34.41 21.4821 34.6785 21.3682 34.9878 21.3682C35.3052 21.3682 35.5737 21.4821 35.7935 21.71C36.0213 21.9378 36.2085 22.2756 36.355 22.7231L38.7842 30.3525L46.7798 30.3037C47.2518 30.2956 47.6302 30.3647 47.915 30.5112C48.1999 30.6577 48.3911 30.8774 48.4888 31.1704C48.5864 31.4715 48.562 31.7645 48.4155 32.0493C48.269 32.3341 48.0046 32.6108 47.6221 32.8794L41.1035 37.5669L43.6548 45.1597C43.8094 45.5991 43.8582 45.9775 43.8013 46.2949C43.7524 46.6123 43.6019 46.8646 43.3496 47.0518C43.0973 47.2471 42.8125 47.3122 42.4951 47.2471C42.1777 47.1901 41.8319 47.0273 41.4575 46.7588L34.9878 42.0103L28.5303 46.7588C28.1559 47.0273 27.8101 47.1901 27.4927 47.2471C27.1753 47.3122 26.8905 47.2471 26.6382 47.0518ZM28.396 44.6348C28.4123 44.6592 28.4489 44.651 28.5059 44.6104L34.3774 40.1304C34.5728 39.9757 34.7762 39.8984 34.9878 39.8984C35.2075 39.8984 35.415 39.9757 35.6104 40.1304L41.4819 44.6104C41.5389 44.651 41.5755 44.6592 41.5918 44.6348C41.5999 44.6185 41.5999 44.5819 41.5918 44.5249L39.1626 37.5425C39.1056 37.3879 39.0771 37.2414 39.0771 37.103C39.0853 36.9647 39.126 36.8385 39.1992 36.7246C39.2725 36.6025 39.3783 36.4927 39.5166 36.395L45.5957 32.1958C45.6527 32.1632 45.673 32.1307 45.6567 32.0981C45.6486 32.0737 45.612 32.0615 45.5469 32.0615L38.1616 32.1958C37.9093 32.2039 37.7018 32.1551 37.5391 32.0493C37.3763 31.9354 37.2583 31.7523 37.1851 31.5L35.061 24.4321C35.0448 24.367 35.0203 24.3345 34.9878 24.3345C34.9634 24.3345 34.943 24.367 34.9268 24.4321L32.8027 31.5C32.7295 31.7523 32.6115 31.9354 32.4487 32.0493C32.286 32.1551 32.0785 32.2039 31.8262 32.1958L24.4409 32.0615C24.3758 32.0615 24.3392 32.0737 24.3311 32.0981C24.3148 32.1307 24.3351 32.1632 24.3921 32.1958L30.4712 36.395C30.6095 36.4927 30.7153 36.6025 30.7886 36.7246C30.8618 36.8385 30.8984 36.9647 30.8984 37.103C30.9066 37.2414 30.8822 37.3879 30.8252 37.5425L28.396 44.5249C28.3797 44.5819 28.3797 44.6185 28.396 44.6348Z" fill={darkMode ? "#FFFFFF" : '#333333'} />
                            </g>
                        </svg>
                        <div className="-ml-1">Notifications</div>
                    </div>
                    <Toggle turnOn={notifications} setTurnOn={setNotifications} />
                </div>
            </div>

            {/* Switch Sections */}
            <SwitchSection darkMode={darkMode}/>

            {/* Dialog */}
            <div onClick={() => setDialog(true)} className="cursor-pointer text-white w-[83px] h-12 rounded-full flex items-center justify-center bg-[#0088FF]">Dialog</div>
            
            <AnimatePresence>
                {dialog && (
                    <motion.div
                        key="dialog"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 z-30 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <DialogBox darkMode={darkMode} setDialog={setDialog} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Switch Lables */}
            <SwitchLabel darkMode={darkMode} section={section1} setSection={setSection1} titles={titles}/>

            {/* Switch Lavel V2 */}
            <SwitchLabelV2 darkMode={darkMode} section={section2} setSection={setSection2} titles={titles} />

            {/* Button */}
            <Button darkMode={darkMode}/>

            {/* Passcode */}
            <div className="h-80 w-[250px] grid grid-rows-3 grid-cols-3 gap-5 justify-center items-center">
                <ButtonLarge darkMode={darkMode} val={1} />
                <ButtonLarge darkMode={darkMode} val={2} />
                <ButtonLarge darkMode={darkMode} val={3} />

                <ButtonLarge darkMode={darkMode} val={4} />
                <ButtonLarge darkMode={darkMode} val={5} />
                <ButtonLarge darkMode={darkMode} val={6} />

                <ButtonLarge darkMode={darkMode} val={7} />
                <ButtonLarge darkMode={darkMode} val={8} />
                <ButtonLarge darkMode={darkMode} val={9} />

                <div></div>
                <ButtonLarge darkMode={darkMode} val={0} />
                <div></div>
            </div>

            <SwitchMultiSection darkMode={darkMode}/>
            
           
            <a href="https://heyashish.space" target="_blank" className="font-mono text-base md:text-lg underline underline-offset-4">Ashish Raut</a>
        </div>
    )
}

