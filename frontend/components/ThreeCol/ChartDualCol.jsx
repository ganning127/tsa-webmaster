import { ChartCard } from "../Cards/ChartCard"
import Data from "../../data/impactCharts.json"
import { SimpleGrid } from "@chakra-ui/react";
export const ChartDualCol = () => {

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {Data.map((item, index) => {
                return (
                    <ChartCard key={index} data={item} />
                )
            })}

        </SimpleGrid>
    )
}