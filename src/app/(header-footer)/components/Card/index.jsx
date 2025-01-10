import { Space } from "antd";

const Card = ({
  header = null,
  title,
  description,
  onHover = () => {},
  onBlur = () => {},
}) => {
  return (
    <div
      onMouseLeave={onBlur}
      onMouseEnter={onHover}
      className="border-[1px] border-[#eaeaea] hover:border-[#999999] rounded-[12px] p-[24px] cursor-pointer"
    >
      <Space direction="vertical">
        <div className="flex items-center justify-center p-2">{header}</div>
        <h2 className="text-[20px] font-bold">{title}</h2>
        <div className="text-[14px] text-[#666666]">{description}</div>
      </Space>
    </div>
  );
};

export default Card;
