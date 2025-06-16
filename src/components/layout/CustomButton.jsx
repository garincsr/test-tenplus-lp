const CustomButton = ({ text = "Click Me", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-12 py-4 bg-primary hover:bg-gradient-to-r hover:from-orange-600 hover:via-red-600 hover:to-pink-600 hover:text-white text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
