export const SmallHeading = ({ desc, children }) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-4xl font-bold text-dark-blue">{children}</h1>
            {desc && <p className="text-lg italic  mt-1 text-gray-500">{desc}</p>}
        </div>
    )
}