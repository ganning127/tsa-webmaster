export const Button = ({ href, className, children }) => {
    return (
        <a href={href}>
            <button className={`${className} rounded-md bg-light-blue text-white px-4 py-3 font-bold text-xl duration-300`}>{children}</button>
        </a>
    )
}