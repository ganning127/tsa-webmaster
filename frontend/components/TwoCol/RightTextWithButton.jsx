import { Button } from "../Button"

export const RightTextWithButton = ({ title, desc, buttonText, buttonLink, pic, picRadius }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="mt-4 md:mt-0">
                <img src={pic} alt="pic" className={`max-h-96 mx-auto rounded-${picRadius}`} />
            </div>
            <div className="max-w-xl m-auto text-center md:text-right">
                <h2 className="text-5xl font-bold text-dark-blue">{title}</h2>
                <p className="text-2xl text-dark my-2">{desc}</p>
                <Button className="bg-light-blue text-white hover:bg-dark-blue shadow-lg" href={buttonLink}>{buttonText}</Button>
            </div>
        </div>
    )
}