import Button from "../../../components/Button/Button";
import { useEffect, useState } from "react";
import CountdownExpired from "./CountdownExpired";

const CountdownTimer = () => {
  const [countDownSeconds, setCountDownSeconds] = useState<number | any>(10);
  const [timer, setTimer] = useState<boolean>(false);

  useEffect(() => {

    const handleCountDown = () => {
      if (timer) {
        if (countDownSeconds > 0) {
          setCountDownSeconds(countDownSeconds - 1);
        }
      } else {
        setTimer(false);
      }
    };

    const intervalId = setInterval(() => {
      handleCountDown();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countDownSeconds, timer]);

  const handleStartTimer = () => {
    setTimer(true); 
  };

  const handleStopTimer = () => {
    setTimer(false);
  };

  const handleResetTimer = () => {
    setCountDownSeconds(10);
    setTimer(false);
  };

  const handleSetTimer = (seconds: number) => {
    setCountDownSeconds(seconds);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0">
      <div className=" space-y-4 md:space-y-6 ">
        <div className="flex gap-10 justify-center flex-col items-center px-3 py-5 ">
          {countDownSeconds !== 0 ? (
            <>
              <h1 className="text-3xl font-bold md:text-4xl md:pt-2 ">
                {countDownSeconds <= 1
                  ? `${countDownSeconds} second`
                  : `${countDownSeconds} seconds`}
              </h1>
            
              <div className="flex gap-3">
                <Button color={"bg-blue-600"} onClick={handleStartTimer}>
                  Start
                </Button>
                <Button color={"bg-red-600"} onClick={handleStopTimer}>
                  Stop
                </Button>
                <Button color={"bg-amber-600"} onClick={handleResetTimer}>
                  Reset
                </Button>
              </div>
              <div className="flex gap-3 text-center  md:flex-row">
                <Button
                  color={"bg-green-600"}
                  onClick={() => handleSetTimer(10)}
                >
                  10 seconds
                </Button>
                <Button
                  color={"bg-green-600"}
                  onClick={() => handleSetTimer(30)}
                >
                  30 seconds
                </Button>
                <Button
                  color={"bg-green-600"}
                  onClick={() => handleSetTimer(60)}
                >
                  1 minute
                </Button>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col gap-5 items-center my-5">
              <CountdownExpired />
              <Button color={"bg-amber-600"} onClick={handleResetTimer}>
                Reset
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
