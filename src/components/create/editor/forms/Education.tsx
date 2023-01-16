import { useResumeAction } from "@/common/hooks/useResumeAction";
import { useEffect } from "react";
import { RichEditor } from "./common/RichEditor";
import { TextBox } from "./common/TextBox";
import { ExpandibleSection } from "./common/ExpandibleSection";
import { RenameableSectionTitle } from "./common/RenameableSectionTitle";

const EducationBlock = ({ order, _key }: { order: number; _key: number }) => {
  const { state, setEducation } = useResumeAction();
  const { school, degree, start, end, description, city } =
    state.education.find((item) => item._key === _key)!;
  return (
    <div className="grid grid-cols-2 gap-1">
      <TextBox
        onChange={(e) => {
          setEducation({
            _key,
            key: "school",
            value: e.target.value,
          });
        }}
        value={school}
        label="School"
        placeholder=""
      />
      <TextBox
        onChange={(e) =>
          setEducation({
            _key,
            key: "degree",
            value: e.target.value,
          })
        }
        value={degree}
        label="Degree"
        placeholder=""
      />
      <TextBox
        onChange={(e) =>
          setEducation({
            _key,
            key: "start",
            value: e.target.value,
          })
        }
        value={start}
        label="Start Date"
        placeholder=""
      />
      <TextBox
        onChange={(e) =>
          setEducation({
            _key,
            key: "end",
            value: e.target.value,
          })
        }
        value={end}
        label="End Date"
        placeholder=""
      />
      <TextBox
        onChange={(e) =>
          setEducation({
            _key,
            key: "city",
            value: e.target.value,
          })
        }
        value={city}
        label="City"
        placeholder=""
      />
      <div className="col-span-2 pt-2">
        <RichEditor
          onChange={(value) =>
            setEducation({
              _key,
              key: "description",
              value: value,
            })
          }
          value={description}
        />
      </div>
    </div>
  );
};

export const Education = () => {
  const { state, addEducation, setEducation, setSectionTitle } =
    useResumeAction();
  return (
    <ExpandibleSection
      title={
        <RenameableSectionTitle
          onRename={(title) => {
            setSectionTitle({
              section: "education",
              title,
            });
          }}
          title={state.title_map["education"]}
        />
      }
      onAddMore={() => {
        addEducation();
      }}
      data={state.education.map((item) => {
        return {
          title: item.school || "School",
          description: item.degree || "Degree",
          _key: item._key,
          Child: (order: number, _key: number) => (
            <EducationBlock order={order} _key={_key} />
          ),
        };
      })}
      onReorder={(newOrder) => {
        newOrder.map((_key, index) => {
          setEducation({
            _key: _key,
            key: "index",
            value: index,
          });
        });
      }}
    >
      <div className="text-[10px] text-gray-400 font-thin">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </div>
    </ExpandibleSection>
  );
};
