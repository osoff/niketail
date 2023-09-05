function Button({ children, iconURL, bgC, borderC, txtColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgC
          ? `${bgC} ${txtColor} ${borderC} dark:text-white dark:bg-black dark:border-white`
          : "bg-coral-red  text-white border-coral-red active:bg-red-500"
      } rounded-full`}
    >
      {children}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;
