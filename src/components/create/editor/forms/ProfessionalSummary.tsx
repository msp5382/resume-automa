import { useResumeAction } from "@/common/hooks/useResumeAction";
import { RenameableSectionTitle } from "./common/RenameableSectionTitle";
import { RichEditor } from "./common/RichEditor";

export const ProfessionalSummary = () => {
  const {
    state: {
      professional_summary: { summary },
      title_map,
    },
    setProfessionalSummary,
    setSectionTitle,
  } = useResumeAction();
  return (
    <div className="flex flex-col gap-2 py-1">
      <RenameableSectionTitle
        onRename={(title) => {
          setSectionTitle({
            section: "professional_summary",
            title,
          });
        }}
        title={title_map["professional_summary"]}
      />
      <p className="text-[10px] text-gray-400 font-thin">
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
