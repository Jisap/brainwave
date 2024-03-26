import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      // Caja de bordes redondeados
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""
        } text-base`}
    >
      {/* icon loading */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;