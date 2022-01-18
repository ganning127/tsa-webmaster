import { TeamCard } from "../Cards/TeamCard"

export const TeamGrid = ({ data }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data.map((item, index) => {
                return (
                    <TeamCard key={index} {...item} />
                )
            })}
        </div>
    )
}