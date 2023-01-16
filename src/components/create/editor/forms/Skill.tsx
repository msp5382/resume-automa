import { useResumeAction } from "@/common/hooks/useResumeAction";
import { useEffect } from "react";
import { RichEditor } from "./common/RichEditor";
import { TextBox } from "./common/TextBox";
import { ExpandibleSection } from "./common/ExpandibleSection";
import { RenameableSectionTitle } from "./common/RenameableSectionTitle";

const SkillBlock = ({ order, _key }: { order: number; _key: number }) => {
  const { state, setSkill } = useResumeAction();
  const { skill, level } = state.skill.find((item) => item._key === _key)!;
  return (
    <div className="grid grid-cols-2 gap-1">
      <TextBox
        onChange={(e) => {
          setSkill({
            _key,
            key: "skill",
            value: e.target.value,
          });
        }}
        value={skill}
        label="Skill"
        placeholder="e.g. Figma Design"
      />
      <TextBox
        onChange={(e) =>
          setSkill({
            _key,
            key: "level",
            value: e.target.value,
          })
        }
        value={level}
        label="Level"
        placeholder="e.g. Expert"
      />
    </div>
  );
};

export const Skill = () => {
  const { state, addSkill, setSkill, setSectionTitle } = useResumeAction();
  return (
    <ExpandibleSection
      title={
        <RenameableSectionTitle
          onRename={(title) => {
            setSectionTitle({
              section: "skill",
              title,
            });
          }}
          title={state.title_map["skill"]}
        />
      }
      onAddMore={() => {
        addSkill();
      }}
      data={state.skill.map((item) => {
        return {
          title: item.skill || "Skill",
          description: item.level || "Level",
          _key: item._key,
          Child: (order: number, _key: number) => (
            <SkillBlock order={order} _key={_key} />
          ),
        };
      })}
      onReorder={(newOrder) => {
        newOrder.map((_key, index) => {
          setSkill({
            _key: _key,
            key: "index",
            value: index,
          });
        });
      }}
    >
      <div className="text-[10px] text-gray-400 font-thin">
        Choose 5 of the most important skills to show your talents! Make sure
        they match the keywords of the job listing if applying via an online
        system.
      </div>
    </ExpandibleSection>
  );
};
