type Props = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

const Button = ({ onClick, color, children }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-2 py-3 text-sm  mt-0  text-white rounded-lg ${color} md:px-3 md:text-md`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;