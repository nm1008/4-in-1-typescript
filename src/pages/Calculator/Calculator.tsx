const Calculator = () => {

  return (
    <section className=" h-screen bg-gradient-to-b from-white to-blue-500">
      <h1 className="text-center pt-10 font-bold text-3xl">React Calculator</h1>
      <div className="container mx-auto flex flex-col justify-center pt-10 w-full md:w-2/5 lg:w-1/3 xl:w-96">
        <div className=" bg-black p-3 m-2 rounded-lg sm:mx-20 md:mx-0">
          <div className="flex flex-col bg-white rounded-lg mx-2 my-5 p-5">
            <h1 className="grow text-end font-bold text-lg ">input</h1>
            <h1 className="grow text-end font-bold text-xl ">res</h1>
          </div>
          <div className="grid grid-cols-4 text-white">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>Del</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>X</button>
          </div>
          <div className="flex text-white">
            <button className="grow">Reset</button>
            <button className="grow">=</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
