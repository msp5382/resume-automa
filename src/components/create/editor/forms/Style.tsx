//@ts-nocheck
import { useRef } from "react";
import { TwitterPicker } from "react-color";

export const Style = () => {
  return (
    <div>
      <div className="font-semibold">Style</div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="flex flex-col">
          <label className="text-xs text-gray-500">Fonts</label>
          <select className="bg-gray-100 text-xs border-gray-200 border-2 p-2 rounded-md outline-none focus:bg-gray-200">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className="">
          <TwitterPicker />
        </div>
      </div>
    </div>
  );
};
