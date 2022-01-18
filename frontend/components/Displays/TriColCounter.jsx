import { CounterCard } from "../Cards/CounterCard"

export const TriColCounter = ({ data }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => {
                return (
                    <CounterCard key={index} {...item} />
                )
            })}
        </div>
    )
}