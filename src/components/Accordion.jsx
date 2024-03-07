import React, { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

// export const Abs = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="grid grid-cols-2 gap-y-[18px] gap-x-[21px] items-center justify-center lg:py-[60px] py-[30px]">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-start ps-5 h-[62px] max-w-[590px] bg-[#f9fafb] rounded-[18px]"
//         >
//           <div
//             onClick={() => handleClick(index)}
//             className="cursor-pointer flex gap-[12px] items-center"
//           >
//             <FiPlus size={23} />
//             <p className="text-[20px] font-semibold leading-[140%] text-[#252b31]">
//               {item.title}
//             </p>
//           </div>
//           <div>{activeIndex === index && <div>{item.content}</div>}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

export const Accordion = ({ items }) => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <Collapse
      size="small"
      bordered={false}
      defaultActiveKey={["0"]}
      expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      className="grid grid-cols-1 max-w-[500px] mx-auto lg:grid-cols-2 gap-y-[18px] gap-x-[21px] items-center justify-center "
      items={items(panelStyle)}
    />
  );
};
