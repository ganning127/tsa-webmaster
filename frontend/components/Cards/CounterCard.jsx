import CountUp from 'react-countup';

export const CounterCard = ({ title, num, desc }) => {
    return (
        <div className="shadow-md p-4 text-center max-w-sm mx-auto hover:scale-105 duration-300">
            <h3 className="text-dark font-bold text-2xl">{title}</h3>

            <CountUp
                start={num - 200 < 0 ? 0 : num - 200}
                end={num}
                delay={0}
                suffix="+"
            >
                {({ countUpRef }) => (
                    <div>
                        <p className="text-6xl text-dark-green font-extrabold my-2"><span ref={countUpRef} /></p>
                    </div>
                )}
            </CountUp>

            <p className="text-xl text-slate-800">{desc}</p>
        </div>
    )
}