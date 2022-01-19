import Chart from 'chart.js/auto' // needed for "no tree shaking"
import { Bar, Pie, PolarArea } from 'react-chartjs-2';

export const ChartCard = ({ data }) => {
    return (
        <div className="shadow-md p-4 text-center max-w-md mx-auto hover:scale-105 duration-300">
            <h3 className="text-dark font-bold text-2xl mb-2">{data.title}</h3>

            {data.type === "bar" && <Bar data={data.data} />}
            {data.type === "pie" && <Pie data={data.data} />}
            {data.type === "polarArea" && <PolarArea data={data.data} />}

            <p className="text-xl text-slate-800 mt-2">{data.desc}</p>
        </div>
    )
}