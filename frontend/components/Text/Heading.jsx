export const Heading = ({ desc, children }) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-6xl font-bold text-dark-blue">{children}</h1>
            {desc && <p className="text-xl font-semibold  mt-2 text-dark">{desc}</p>}
        </div>
    )
}