import { ChartCard } from "../Cards/ChartCard"
import Data from "../../data/impactCharts.json"
export const ChartDualCol = () => {

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            {Data.map((item, index) => {
                return (
                    <ChartCard key={index} data={item} />
                )
            })}

        </div>
    )
}