import Chart from 'chart.js/auto' // needed for "no tree shaking"
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import { Heading, Text, Box } from '@chakra-ui/react';
export const ChartCard = ({ data }) => {
    return (
        <Box shadow="lg" p={4} textAlign="center">
            <Heading color="blue.dark">{data.title}</Heading>

            {data.type === "bar" && <Bar data={data.data} />}
            {data.type === "pie" && <Pie data={data.data} />}
            {data.type === "polarArea" && <PolarArea data={data.data} />}

            <Text mt="4" fontSize="xl">{data.desc}</Text>
        </Box>
    )
}