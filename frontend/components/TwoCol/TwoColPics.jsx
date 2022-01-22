import { Img, SimpleGrid, Link } from '@chakra-ui/react'

export const TwoColPics = ({ data }) => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            {data.map((item, index) => {
                return (
                    <Link href={item.link} key={index} isExternal>
                        <Img key={index} src={item.img} alt="pic" maxH="100px" mx="auto" />
                    </Link>
                )
            }
            )}
        </SimpleGrid>
    )
}

