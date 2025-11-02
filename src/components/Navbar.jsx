import { useState, useEffect } from "react"

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="w-45 text-center md:text-left text-3xl font-bold rounded-md bg-white text-black p-1 md:bg-transparent md:text-white">Portofolio</h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-2 rounded-full md:mt-0 mt-5  md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                <li>
                    <a href="#" className="ms-3 sm:text-[12pt] text-base font-medium hover:text-white/50">Beranda</a>
                </li>
                <li>
                    <a href="#" className="sm:text-[12pt] text-base font-medium hover:text-white/50">Tentang</a>
                </li>
                <li>
                    <a href="#" className="sm:text-[12pt] text-base font-medium hover:text-white/50">Proyek Saya</a>
                </li>
                <li>
                    <a href="#" className="me-3 sm:text-[12pt] text-base font-medium hover:text-white/50">Kontak</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
