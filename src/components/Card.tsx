type Props = {
  title: string;
  children: string;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border ">
      <div className=" space-y-4 md:space-y-6 mb-5 ">
        <div className="flex gap-10  flex-col items-center mt-5">
          <h1 className="font-bold text-sm md:text-md lg:text-lg">{title}</h1>
          <p className="">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
