import {
  IoAddCircleOutline,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import { useRaisedShadow } from "./hooks/useRaisedShadow";

interface ExpandibleData {
  title: string;
  description: string;
  Child: (order: number, _key: number) => JSX.Element;
  _key: number;
}

interface IExpandibleProps {
  data: ExpandibleData[];
  onAddMore?: () => void;
  title: string;
  onReorder?: (_keys: number[]) => void;
}

interface ExpandibleWithKey extends ExpandibleData {
  _key: number;
}

const expandContext = createContext<{
  data: ExpandibleWithKey[];
  expanded: number[];
  setExpanded: (expanded: number[]) => void;
}>({
  data: [],
  expanded: [],
  setExpanded: () => {},
});

const Expandable = ({ item, index }: any) => {
  const controls = useDragControls();
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const expandible = useContext(expandContext);
  const { data, expanded, setExpanded } = expandible;
  const { title, description, Child } = data.find(({ _key }) => _key === item)!;
  const isExpanded = expanded.includes(item);
  const toggleExpanded = () => {
    if (isExpanded) {
      setExpanded(expanded.filter((i) => i !== item));
    } else {
      setExpanded([...expanded, item]);
    }
  };
  return (
    <Reorder.Item
      style={{ boxShadow, y }}
      value={item}
      dragListener={false}
      dragControls={controls}
      className="w-full border bg-white rounded p-2 pl-5 relative"
      onClick={isExpanded ? undefined : toggleExpanded}
    >
      <div className="flex justify-between items-center ">
        <div className="absolute left-0">
          <RxDragHandleDots2
            size={20}
            color="gray"
            cursor={"grab"}
            onPointerDown={(e) => {
              e.preventDefault();
              controls.start(e);
            }}
          />
        </div>
        <div className="ml-1 text-sm">
          <h1>{title}</h1>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        <div>
          {isExpanded ? (
            <IoChevronUp onClick={toggleExpanded} />
          ) : (
            <IoChevronDown onClick={toggleExpanded} />
          )}
        </div>
      </div>
      {isExpanded && <div className="pt-5 text-sm">{Child(index, item)}</div>}
    </Reorder.Item>
  );
};

export const ExpandibleSection = ({
  data,
  title,
  onAddMore,
  onReorder,
}: IExpandibleProps) => {
  const onlyKeys = data.map(({ _key }) => _key);
  const [items, setItems] = useState(onlyKeys);
  const [expanded, setExpanded] = useState<number[]>(onlyKeys);
  useEffect(() => {
    setItems(data.map(({ _key }) => _key));
  }, [data]);
  return (
    <expandContext.Provider
      value={{ data: data, expanded: expanded, setExpanded }}
    >
      <div className="flex flex-col gap-2 py-1 mb-12">
        <div className="">{title}</div>
        <Reorder.Group
          className="flex flex-col gap-2"
          axis="y"
          values={items}
          onReorder={(s) => {
            setItems(s);
            onReorder && onReorder(s);
          }}
        >
          {items.map((item, i) => (
            <Expandable key={item} index={i} item={item} />
          ))}
        </Reorder.Group>
        <button
          onClick={onAddMore}
          className="text-xs text-yellow-600 hover:bg-yellow-100 flex items-center gap-1"
        >
          <IoAddCircleOutline size={15} />
          <div>Add more</div>
        </button>
      </div>
    </expandContext.Provider>
  );
};
