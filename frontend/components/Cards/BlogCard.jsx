export const BlogCard = ({ title, description, image, link }) => {
    return (
        <div className="shadow-md mx-auto max-w-md pb-4">
            <a href={link}>
                <img src={image} alt="" className="w-100 mx-auto" />
                <h3 className="font-bold text-2xl text-center my-4 text-dark-blue">{title}</h3>
                <p className="text-center">{description}</p>
            </a>
        </div>
    )
}