import React, { useState, useRef } from 'react';
import { useOutsideClick } from './useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';
import search_icon from '../../assets/Search.svg';

export default function SearchComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);

    const handleOutsideClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    useOutsideClick(searchRef, handleOutsideClick);

    const toggleSearchBar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div ref={searchRef} className="flex relative">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: +50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center -ml-2"
                    >
                        <input
                            type="text"
                            className="text-3xl p-2 h-[5rem] bg-[#1A2E40] rounded-l-[15px] focus:outline-none"
                            placeholder="Search..."
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={toggleSearchBar}
                className={`flex items-center justify-center p-2 bg-[#1A2E40] w-[5rem] h-[5rem] ${isOpen ? "rounded-tr-[15px] rounded-tl-[15px]" : "rounded-full"}`}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <img src={search_icon} alt="Search Icon" className="h-[3rem] w-[3rem]" />
            </motion.button>
        </div>
    );
}
