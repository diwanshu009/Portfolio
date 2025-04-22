import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Navigation({ onClick }) {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experiences", label: "Experience" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <ul className="nav-ul">
            {links.map(({ href, label }) => (
                <li className="nav-li" key={label}>
                    <a className="nav-link" href={href} onClick={onClick}>
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a
                        href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                        Diwanshu
                    </a>
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                            className="w-6 h-6"
                            alt="toggle"
                        />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation onClick={() => setIsOpen(false)} />
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;