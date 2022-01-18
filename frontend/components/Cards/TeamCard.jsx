export const TeamCard = ({ title, about, name, pic }) => {
    return (
        <div className="p-4 rounded-md shadow-md bg-slate-50 text-center max-w-md mx-auto hover:scale-105 duration-200">
            <div className="">
                <img src={pic} alt={name} className="mx-auto rounded-full max-h-32" />
                <p className="font-bold mt-2 text-xl">{name}</p>
                <p className="text-dark-blue italic font-semibold text-lg">{title}</p>
            </div>
            <p className="text-xl">{about}</p>
        </div>
    )
}