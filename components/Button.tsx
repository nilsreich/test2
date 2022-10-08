type ButtonProps = {
  label: String;
  icon?: String;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 py-1 pl-2 pr-8 font-medium text-white hover:bg-blue-400 active:bg-blue-600"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
