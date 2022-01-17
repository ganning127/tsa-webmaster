export const CardWithTitlePicDesc = ({ title, desc, pic }) => {
    return (
        <div className="shadow-lg p-4 text-center max-w-sm mx-auto">
            <h3 className="text-dark-blue font-bold text-2xl">{title}</h3>
            <img src={pic} alt="pic" className="h-40 mx-auto" />
            <p className="text-xl text-dark">{desc}</p>
        </div>
    )
}