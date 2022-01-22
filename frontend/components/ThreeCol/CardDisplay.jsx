import { TitleImageDesc } from "../Cards/TitleImageDesc";
import { SimpleGrid } from "@chakra-ui/react";

export const CardDisplay = ({ data }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {data.map((item, index) => {
                return (
                    <TitleImageDesc
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        image={item.pic}
                    />
                )
            }
            )}
        </SimpleGrid>
    )
}