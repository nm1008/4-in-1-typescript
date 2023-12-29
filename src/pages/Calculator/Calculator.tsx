import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

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
            <button className={numberBtn}>7</button>
            <button className={numberBtn}>8</button>
            <button className={numberBtn}>9</button>
            <button className={funcButton}>Del</button>
            <button className={numberBtn}>4</button>
            <button className={numberBtn}>5</button>
            <button className={numberBtn}>6</button>
            <button className={operatorBtn}>+</button>
            <button className={numberBtn}>1</button>
            <button className={numberBtn}>2</button>
            <button className={numberBtn}>3</button>
            <button className={operatorBtn}>-</button>
            <button className={numberBtn}>.</button>
            <button className={numberBtn}>0</button>
            <button className={operatorBtn}>/</button>
            <button className={operatorBtn}>X</button>
          </div>
          <div className="flex text-white">
            <button className={`grow ${funcButton}`}>Reset</button>
            <button className={`grow ${operatorBtn}`}>=</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
