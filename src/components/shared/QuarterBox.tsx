import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder=true }) => {
  return (
    <div className={` rounded-md flex-1 flex flex-col justify-center relative px-8 py-16 ${haveBorder && "border" }`}>
      <h4 className="font-bold text-lg">{header}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <div className="absolute text-gray-200 -top-10 right-10 text-[170px] font-bold -z-10">
        {number}
      </div>
    </div>
  )
}
export default QuarterBox;
