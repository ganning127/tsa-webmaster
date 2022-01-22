import CountUp from 'react-countup';
import { Box, Heading, Text } from '@chakra-ui/react';
export const CounterCard = ({ title, num, desc }) => {
    return (
        <Box shadow="lg" p={4} textAlign="center">
            <Heading fontSize="2xl">{title}</Heading>

            <CountUp
                start={num - 200 < 0 ? 0 : num - 200}
                end={num}
                delay={0}
                suffix="+"
            >
                {({ countUpRef }) => (
                    <div>
                        <Text fontSize="7xl" color="green.dark" fontWeight="bold"><span ref={countUpRef} /></Text>
                    </div>
                )}
            </CountUp>

            <Text fontSize="xl">{desc}</Text>
        </Box>
    )
}