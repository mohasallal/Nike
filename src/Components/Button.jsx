const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex  justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:scale-105 duration-150 ${
        fullWidth && "w-full"
      }
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRightIcon"
          className="ml-2 rounded-full wi5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
