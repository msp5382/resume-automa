import { RefObject, useEffect } from "react";

export const useOutsideAlert = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
