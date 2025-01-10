const Card = ({ title = "", description = "" }) => {
  return (
    <div className="rounded-xl border-[1px] border-[#ccc] p-[12px] cursor-pointer">
      <div>
        <h1 className="text-bold text-[18px]">{title}</h1>
      </div>
      <div>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
