import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Dropdown } from './dropdown';

export const Navbar = () => {
    const [mobileMode, setMobileMode] = useState(false);
    useEffect(() => {
        setMobileMode(window.innerWidth <= 925);

        window.addEventListener('resize', () => {
            setMobileMode(window.innerWidth <= 925);
        });
    }, [])

    const [open, setOpen] = useState(false);

    if (!mobileMode)
        return (
            <nav className=" bg-white pl-4 py-2 items-center  sticky top-0 z-50">
                <div className="flex justify-start flex-wrap place-items-center">
                    {/* TODO: Use props to control the underline easily */}
                    <a href="/" className=" font-bold p-0 m-0 text-light-dark-blue resize-none hover:scale-115 duration-300">
                        <img src="/no_bottom.png" alt="RoboReach Logo" height={50} width={50} objectFit="cover" />
                    </a>
                    <a href="/" className="text-4xl font-bold text-light-dark-blue hover:scale-115 duration-300">
                        <span className="ml-4">Robo<span className="text-light-dark-gray">Reach</span></span>
                    </a>
                    <a href="/" className="text-dark-small-text text-xl content ml-12 border-b-4 border-light-dark-blue">Home</a>
                    <a href="/about" className="text-dark-small-text text-xl content ml-6">About</a>

                    <Dropdown name="Programs" links={[{ name: "Impact", href: "/impact" }, { name: "Builds", href: "/build" }]} />
                    <Dropdown name="Application" links={[{ name: "Apply Now", href: "/apply" }, { name: "FAQs", href: "/faq" }]} />
                    <a href="/login" className="text-xl ml-6 bg-dark-green text-white px-4 py-2 duration-300 hover:bg-darker-green rounded-md">Sign In</a>
                </div>

            </nav>
        );
    else if (!open)
        return (
            <nav className="flex bg-white items-start justify-start flex-wrap items-center px-6 py-3 sticky top-0 z-50">
                <HiMenu className="fill-light-dark-gray w-6 h-6 hover:cursor-pointer" onClick={() => setOpen(true)} />
                <div className="grow"></div>
                <div className="h-12 w-12 relative">
                    <Image src="/no_bottom.png" alt="RoboReach Logo" layout="fill" objectFit="cover" />
                </div>
                <a href="/" className="text-3xl ml-1 text-light-dark-blue">Robo<span className="text-light-dark-gray">Reach</span></a>
                <div className="grow"></div>
            </nav>
        );
    else
        return (
            <div>
                <nav className="flex bg-white items-start justify-start flex-wrap items-center px-6 py-3">
                    <HiX className="fill-light-dark-gray w-6 h-6 hover:cursor-pointer" onClick={() => setOpen(false)} />
                    <div className="grow"></div>

                    <div className="h-12 w-12 relative">
                        <a href="/" className="text-3xl ml-1 text-light-dark-blue">
                            <Image src="/no_bottom.png" alt="RoboReach Logo" layout="fill" objectFit="cover" />
                        </a>
                    </div>

                    <a href="/" className="text-3xl  ml-1 text-light-dark-blue">Robo<span className="text-light-dark-gray">Reach</span></a>
                    <div className="grow"></div>
                </nav>
                <nav className="flex bg-white flex-col text-dark-small-text text-xl m-4 gap-1">
                    <a href="/" className="border-b-2 pb-2 border-grey mt-3">Home</a>
                    <a href="/about" className="border-b-2 pb-2 border-grey mt-3">About</a>
                    <Dropdown mobile={true} name="Programs" links={[{ name: "Impact", href: "/impact" }, { name: "Builds", href: "/build" }]} />
                    <Dropdown mobile={true} name="Application" links={[{ name: "Apply Now", href: "/apply" }, { name: "FAQs", href: "/faq" }]} />
                </nav>
            </div>

        );
}
