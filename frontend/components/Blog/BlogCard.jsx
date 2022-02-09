import {
    Box,
    Text,
    useColorMode
} from '@chakra-ui/react'
import * as React from 'react'
export const BlogCard = ({ title, image, link, desc, isExternal, isTrunc, slug }) => {
    let bkgUrl = `url(${image})`
    const { colorMode } = useColorMode();
    const titleColors = {
        light: 'gray.800',
        dark: 'purple.light'
    }
    const descColors = {
        light: 'gray.600',
        dark: 'gray'
    }

    const bgColors = {
        light: '#f7f7f7',
        dark: '#363636'
    }
    return (
        <Box
            overflow="hidden"
            mx="auto"
            as="a"
            w={{ sm: "100%" }} // width 100 when larger than sm
            borderRadius="5px"
            href={link}
            bg={bgColors[colorMode]}
            transition="all 0.2s"
            pb="6"
            _hover={{ bg: '#dedede' }}
            target={isExternal ? "_blank" : "_self"}
        >
            <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
                bgRepeat="no-repeat" backgroundSize="cover">
            </Box>
            <Box
                fontWeight="semibold"
                mx="4"
                mt="6"
            >
                {((desc && isTrunc) &&
                    <>
                        <Text fontSize="2xl" fontWeight="800" color={titleColors[colorMode]}>
                            {title}
                        </Text>
                        <Text fontSize="md" color="gray" noOfLines={1}>{desc}</Text>
                    </>
                )}

                {((desc && !isTrunc) &&
                    <>
                        <Text fontSize="2xl" fontWeight="800" color={titleColors[colorMode]}>
                            {title}
                        </Text>
                        <Text fontSize="md" color={descColors[colorMode]}>{desc}</Text>
                    </>
                )}


            </Box>

        </Box>

    )
}