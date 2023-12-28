import Clock from "./Clock";
import CountdownTimer from "./Countdown/CountdownTimer";
import Stopwatch from "./Stopwatch/Stopwatch";

const ClockPage = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-white to-blue-500 md:h-screen">
      <div className="container mx-auto py-5">
        <div className=" flex flex-col items-center justify-center my-5 px-5 md:py-8 lg:py-0 ">
          <h1 className="text-4xl font-bold mb-5">Clock</h1>
          <Clock />
          
        </div>
        <div className="flex flex-wrap items-center gap-10 md:flex-nowrap">
          <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
            <h1 className="text-center text-3xl font-bold mb-5">
              Countdown Timer
            </h1>
            <CountdownTimer />
          </div>
          <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
            <h1 className="text-center text-3xl font-bold mb-5">Stopwatch</h1>
            <Stopwatch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClockPage;
