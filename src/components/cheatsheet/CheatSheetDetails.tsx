import { CheatSheetItem } from "@/data/templateData";
import { BsBack } from "react-icons/bs";

interface CheatSheetProps {
  data: CheatSheetItem[];
}

const CheatSheetDetails: React.FC<CheatSheetProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <BsBack />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Cheat Sheet Details
      </h2>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="font-mono text-blue-500 mr-4">
              {item.tag || item.property}
            </span>
            <span className="text-gray-700">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheatSheetDetails;
