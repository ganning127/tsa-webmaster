export const SmallSection = ({ title, desc }) => {
    return (
        <>
            <h3 className="text-5xl text-dark-blue font-bold text-center">{title}</h3>
            <p className="text-2xl text-center mt-4 max-w-4xl mx-auto">{desc}</p>
        </>
    )
}