import { useResumeData } from "@/common/hooks/useResumeData";
import dynamic from "next/dynamic";

const Loader = () => (
  <div className="inset-0 flex">
    <div className="m-auto">Loading...</div>
  </div>
);

export const useTemplate = (name: string) => {
  const template = dynamic(() => import(`./${name}`), {
    ssr: false,
    loading: () => <Loader />,
  });
  return template;
};
