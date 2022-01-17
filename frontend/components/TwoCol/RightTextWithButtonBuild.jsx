import { Button } from "../Button"
export const RightTextWithButtonBuild = ({ title, desc, pic, color, colorHover, keyword, answer, buttonText, buttonLink }) => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 px-0 lg:px-20">
            <div className="">
                <img src={pic} alt={title} className="max-h-96 mx-auto lg:ml-0" />
            </div>
            <div className="max-w-lg m-auto text-center lg:text-right">
                <h2 className={`text-5xl font-bold text-${color}`}>{title}</h2>
                <div className="my-3">
                    <p className="text-2xl text-dark">{desc}</p>
                    <p className={`text-${color} font-bold text-2xl my-3`}>{keyword} <span className="text-dark font-normal">{answer}</span></p>
                </div>
                <Button className={`bg-${color} text-white hover:bg-${colorHover} shadow-lg`} href={buttonLink}>{buttonText}</Button>
            </div>
        </div>
    )
}