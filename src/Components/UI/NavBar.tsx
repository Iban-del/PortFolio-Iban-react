
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface LinkInterface {
    key: string;
    text: string;
    onClick?: () => void;
}

export interface NavBarInterface {
    buttons: Array<LinkInterface>;
    logo?: string;
}

const NavBar = ({ buttons, logo = "" }: NavBarInterface) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: LinkInterface) => {
        if (link.onClick) {
        link.onClick();
        }
        setIsOpen(false); 
    };

    return (
        <nav className="w-full bg-transparent sticky top-0 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">
                {logo}
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                {buttons.map((link) => (
                <button
                    key={link.key}
                    onClick={() => handleLinkClick(link)}
                    className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                    {link.text}
                </button>
                ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                onClick={toggleMenu}
                className="text-white hover:bg-white/10 p-2 rounded-md transition-colors"
                >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-transparent"
            >
                <div className="px-4 py-6 space-y-4">
                {buttons.map((link) => (
                    <button
                    key={link.key}
                    onClick={() => handleLinkClick(link)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200 hover:bg-white/10 transition-colors duration-200"
                    >
                    {link.text}
                    </button>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    );
};

export default  NavBar