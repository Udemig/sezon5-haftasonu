type ButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt=""
      />
    </button>
  );
};

export default SearchButton;
