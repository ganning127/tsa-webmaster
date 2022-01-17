import { Button } from "../Button"

export const LeftTextWithButton = ({ title, desc, buttonText, buttonLink, pic }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="max-w-xl m-auto">
                <h2 className="text-5xl font-bold text-dark-blue">{title}asf</h2>
                <p className="text-xl text-dark my-2">{desc}</p>
                <Button className="bg-light-blue text-white hover:bg-dark-blue shadow-lg" href={buttonLink}>{buttonText}</Button>
            </div>
            <div className="mt-4 md:mt-0">
                <img src={pic} alt="pic" className="max-h-96 mx-auto" />
            </div>
        </div>
    )
}