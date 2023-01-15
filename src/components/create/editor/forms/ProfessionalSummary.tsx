import { useResumeAction } from "@/common/hooks/useResumeAction";
import { RichEditor } from "./common/RichEditor";

export const ProfessionalSummary = () => {
  const {
    state: {
      professional_summary: { summary },
    },
    setProfessionalSummary,
  } = useResumeAction();
  return (
    <div className="flex flex-col gap-2 py-1">
      <div className="">Professional Summary</div>
      <p className="text-xs text-gray-600">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>
      <div className="">
        <RichEditor
          onChange={(v) =>
            setProfessionalSummary({
              summary: v,
            })
          }
          value={""}
        />
      </div>
    </div>
  );
};
