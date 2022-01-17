export const ImageGrid = ({ data }) => {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item, index) => {
                    return (
                        <a href={item.link} className="m-auto" target="_blank">
                            <img src={item.img} alt="pic" className="max-h-20 mx-auto" />
                        </a>
                    )

                })}
            </div>
        </>
    )
}