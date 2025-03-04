// eslint-disable-next-line react/prop-types
const NeuButton = ({ handleAdd }) => {
  return (
    <button
      onClick={handleAdd}
      className="px-6 py-2 font-medium bg-red-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      Hover me
    </button>
  );
};

export default NeuButton;
