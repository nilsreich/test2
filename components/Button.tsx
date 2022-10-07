type ButtonProps = {
  theme?: "duolingo" | "carbon";
  label: String;
  icon?: String;
  onClick: () => void;
};

export const Button = ({
  theme = "carbon",
  label,
  icon,
  onClick,
}: ButtonProps) => {
  let design = "";
  switch (theme) {
    case "duolingo":
      design =
        "rounded-lg border-b-4 border-green-700 bg-green-500 px-2 py-1 font-medium text-green-50 hover:bg-green-400 active:border-b-0 active:border-t-4 active:bg-green-600";
      break;
    case "carbon":
      design =
        "bg-blue-500 py-1 pl-2 pr-8 font-medium text-white hover:bg-blue-400 active:bg-blue-600";
      break;
  }
  return (
    <button className={design} onClick={() => onClick()}>
      {label}
    </button>
  );
};
