import { useRef, useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { useOutsideAlert } from "../hooks/useOutsideAlert";

export const RenameableSectionTitle = ({
  title,
  onRename,
}: {
  title: string;
  onRename: (title: string) => void;
}) => {
  const [isRename, setRename] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);
  useOutsideAlert(ref, () => {
    if (ref.current) {
      onRename(ref.current.value);
    }
    setRename(false);
  });
  return (
    <>
      {isRename ? (
        <input
          ref={ref}
          value={title}
          onChange={(e) => onRename(e.target.value)}
          type="text"
          className="outline-none font-semibold"
        />
      ) : (
        <div
          onClick={() => setRename(true)}
          className="font-semibold hover:text-gray-600 flex items-center"
        >
          {title}
          <VscEdit />
        </div>
      )}
    </>
  );
};
