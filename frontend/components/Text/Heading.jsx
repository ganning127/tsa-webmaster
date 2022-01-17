export const Heading = ({ desc, children }) => {
    return (
        <div className="text-center my-4">
            <h1 className="text-5xl font-bold text-dark-blue">{children}</h1>
            <p className="text-xl text-dark">{desc}</p>
        </div>
    )
}