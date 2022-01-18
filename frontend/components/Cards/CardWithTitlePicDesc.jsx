export const CardWithTitlePicDesc = ({ title, desc, pic }) => {
    return (
        <div className="shadow-lg p-4 text-center max-w-sm mx-auto hover:scale-105 duration-300">
            <h3 className="text-dark-blue font-bold text-3xl">{title}</h3>
            <img src={pic} alt="pic" className="h-40 mx-auto my-2" />
            <p className="text-xl text-dark">{desc}</p>
        </div>
    )
}