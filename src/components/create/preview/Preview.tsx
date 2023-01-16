import { useResumeAction } from "@/common/hooks/useResumeAction";
import { ComponentType, useLayoutEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTemplate } from "./templates/template";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

type Style = {
  width: number | undefined;
  height: number | undefined;
};
export type TemplateType = {
  state: ReturnType<typeof useResumeAction>["state"];
  style: Style;
  _ref: any;
};
export const Preview = () => {
  const Template = useTemplate("cool-kids") as ComponentType<TemplateType>;
  const ref = useRef<HTMLDivElement>(null);
  const { state } = useResumeAction();
  const [width, height] = [ref.current?.clientWidth, ref.current?.clientHeight];
  const [style, setStyle] = useState<Style>({ width, height });
  useLayoutEffect(() => {
    setStyle({ width, height });
  }, [width, height]);

  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    console.log(element);
    if (!element) return;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth - 5, pdfHeight - 5);
    console.log(pdf.save("print.pdf"));
  };

  return (
    <div className="bg-slate-700 h-screen flex flex-col relative">
      <div className="m-auto w-[80%]">
        <div
          ref={ref}
          className="shadow-2xl aspect-[1/1.414] bg-white relative"
        >
          <Template _ref={printRef} state={state} style={style} />
        </div>
        <div className="flex justify-between w-full items-center py-2 text-white">
          <div className="text-xs font-thin">
            Resume by <i>Resume Automa</i>
          </div>
          <button
            onClick={handleDownloadPdf}
            className="rounded p-2 bg-indigo-400 text-xs text-white"
          >
            Export
          </button>
        </div>
      </div>
      <IoChevronForward
        size={50}
        color="white"
        opacity={0.5}
        className="absolute right-0 top-0 bottom-0 h-[70px] my-auto"
      />
      <IoChevronBack
        size={50}
        color="white"
        opacity={0.5}
        className="absolute left-0 top-0 bottom-0 h-[70px] my-auto"
      />
    </div>
  );
};
