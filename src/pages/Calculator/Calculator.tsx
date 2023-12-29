import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState<string>("0");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else if (value === "." && input.includes(".")) {
      return;
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    if (result !== "") {
      setInput("0");
      setResult("");
    } else {
      setInput((prevInput) => {
        const newInput = prevInput.slice(0, -1);
        return newInput === "" ? "0" : newInput;
      });
    }
  };

  const numberBtn =
    "bg-gray-700 text-white mx-2 my-3 w-auto rounded-3xl px-1 py-2 text-md font-bold md:text-lg hover:bg-white hover:text-black  transition duration-200";

  const funcButton =
    "bg-gray-400  mx-2 my-3 p-5 rounded-3xl text-md font-bold md:text-lg hover:bg-white hover:text-black  transition duration-200";

  const operatorBtn =
    " bg-amber-500 mx-2 my-3 p-5 rounded-3xl text-md font-bold md:text-lg  hover:bg-white hover:text-black  transition duration-200";

  return (
    <section className=" h-screen bg-gradient-to-b from-white to-blue-500">
      <h1 className="text-center pt-10 font-bold text-3xl">React Calculator</h1>
      <div className="container mx-auto flex flex-col justify-center pt-10 w-full md:w-2/5 lg:w-1/3 xl:w-96">
        <div className=" bg-black p-3 m-2 rounded-lg sm:mx-20 md:mx-0">
          <div className="flex flex-col bg-white rounded-lg mx-2 my-5 p-5">
            <h1 className="grow text-end font-bold text-lg ">{input}</h1>
            <h1 className="grow text-end font-bold text-xl ">{result}</h1>
          </div>
          <div className="grid grid-cols-4 text-white">
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button className={funcButton} onClick={handleDelete}>
              Del
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className={operatorBtn}
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className={operatorBtn}
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className={numberBtn}
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className={operatorBtn}
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
            <button
              className={operatorBtn}
              onClick={() => handleButtonClick("*")}
            >
              X
            </button>
          </div>
          <div className="flex text-white">
            <button className={`grow ${funcButton}`} onClick={handleClear}>
              Reset
            </button>
            <button className={`grow ${operatorBtn}`} onClick={handleCalculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
