import { CardWithTitlePicDesc } from "../Cards/CardWithTitlePicDesc"

export const TriColCards = ({ data }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => {
                return (
                    <CardWithTitlePicDesc key={index} {...item} />
                )
            })}
        </div>
    )
}