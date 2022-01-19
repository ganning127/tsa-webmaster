import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Dropdown } from './dropdown';

export const Navbar = () => {
    const [mobileMode, setMobileMode] = useState(false);
    useEffect(()=> {
        setMobileMode(window.innerWidth <= 800);

        window.addEventListener('resize', ()=> {
            setMobileMode(window.innerWidth <= 800);
        });
     }, [])

     const [open, setOpen] = useState(false);

    if (!mobileMode)
        return (
            <nav className="flex items-start justify-start flex-wrap bg-white p-6 items-center place-items-center sticky top-0 z-50">
                <div className="h-24 w-24 relative">
                    <Image src="/logo.png" alt="RoboReach Logo" layout="fill" objectFit="cover" />
                </div>
                <a href="/" className="text-4xl font-bold ml-4 text-light-dark-blue">Robo<span className="text-light-dark-gray">Reach</span></a>

                {/* TODO: Use props to control the underline easily */}
                <a href="/" className="text-dark-small-text text-xl content ml-12 border-b-4 border-light-dark-blue">Home</a>
                <a href="/about" className="text-dark-small-text text-xl content ml-6">About</a>

                <Dropdown name="Programs" links={[{name: "Impact", href: "/impact"}, {name: "Builds", href: "/build"}]} />
                <Dropdown name="Application" links={[{name: "Apply Now", href: "/apply"}, {name: "FAQs", href: "/faq"}]} />
            </nav>
        );
    else if (!open) 
        return (
            <nav className="flex bg-white items-start justify-start flex-wrap items-center px-6 py-3 sticky top-0 z-50">
                <HiMenu className="fill-light-dark-gray w-6 h-6" onClick={() => setOpen(true)} />
                <div className="grow"></div>
                <div className="h-12 w-12 relative">
                    <Image src="/logo.png" alt="RoboReach Logo" layout="fill" objectFit="cover" />
                </div>
                <a href="/" className="text-3xl font-bold ml-1 text-light-dark-blue">Robo<span className="text-light-dark-gray">Reach</span></a>
                <div className="grow"></div>
            </nav>
        );
    else 
        return (
            <div>
                <nav className="flex bg-white items-start justify-start flex-wrap items-center px-6 py-3">
                    <HiX className="fill-light-dark-gray w-6 h-6" onClick={() => setOpen(false)} />
                    <div className="grow"></div>
                    <div className="h-12 w-12 relative">
                        <Image src="/logo.png" alt="RoboReach Logo" layout="fill" objectFit="cover" />
                    </div>
                    <a href="/" className="text-3xl font-bold ml-1 text-light-dark-blue">Robo<span className="text-light-dark-gray">Reach</span></a>
                    <div className="grow"></div>
                </nav>
                <nav className="flex bg-white flex-col text-dark-small-text font-bold text-xl m-4 gap-1">
                    <a href="/" className="border-b-2 pb-2 border-grey mt-3">Home</a>
                    <a href="/about" className="border-b-2 pb-2 border-grey mt-3">About</a>
                    <Dropdown mobile={true} name="Programs" links={[{name: "Impact", href: "/impact"}, {name: "Builds", href: "/build"}]} />
                    <Dropdown mobile={true} name="Application" links={[{name: "Apply Now", href: "/apply"}, {name: "FAQs", href: "/faq"}]} />
                </nav>
            </div>
            
        );
}
