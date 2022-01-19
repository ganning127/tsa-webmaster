import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export const Dropdown = ({ name, links, mobile }) => {
    const [open, setOpen] = useState(false);

    if (!mobile) {
        if (!open)
        return (
            <p className="text-dark-small-text text-xl content ml-6 flex items-start justify-start items-center place-items-center" onClick={() => setOpen(!open)}>{name} <HiChevronDown className="w-8 h-8 pl-1 pt-1"/></p>
        );
    else 
        return (
            <div>
                <p className="text-dark-small-text text-xl content ml-6 flex items-start justify-start items-center place-items-center" onClick={() => setOpen(!open)}>{name} <HiChevronUp className="w-8 h-8 pl-1 pt-1"/></p>
                <div className="flex flex-col origin-top-right absolute mt-8 w-40 rounded-md shadow-md bg-white text-dark-small-text font-bold text-xl content">
                    <a className="ml-6 mt-3" href={links[0].href}>{links[0].name}</a>
                    <a className="ml-6 mt-3 mb-5" href={links[1].href}>{links[1].name}</a>
                </div>
            </div>
        );
    } else {
        if (open)
            return (
                <div className="flex flex-col mt-3">
                    <p onClick={() => setOpen(false)} className="border-b-2 pb-2 border-grey flex">{name} <div className="grow"/><HiChevronUp className="w-8 h-8 pl-1 pt-1"/></p>
                    <a className="ml-6 border-b-2 pb-2 border-grey mt-2" href={links[0].href}>{links[0].name}</a>
                    <a className="ml-6 border-b-2 pb-2 border-grey mt-2" href={links[1].href}>{links[1].name}</a>
                </div>
            );
        else
            return (
                <p onClick={() => setOpen(true)} className="border-b-2 pb-2 border-grey flex mt-3">{name} <div className="grow"/><HiChevronDown className="w-8 h-8 pl-1 pt-1"/></p>
            );
    }
}
