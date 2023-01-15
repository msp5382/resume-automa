import { useResumeAction } from "@/common/hooks/useResumeAction";
import { useEffect } from "react";
import { RichEditor } from "./common/RichEditor";
import { TextBox } from "./common/TextBox";
import { ExpandibleSection } from "./ExpandibleSection";

const EmploymentHistoryBlock = ({
  order,
  _key,
}: {
  order: number;
  _key: number;
}) => {
  const { state, setEmploymentHistory } = useResumeAction();
  const { job_title, employer, start, end, description } =
    state.employment_history.find((item) => item._key === _key)!;
  return (
    <div className="grid grid-cols-2 gap-1">
      <TextBox
        onChange={(e) => {
          setEmploymentHistory({
            _key,
            key: "job_title",
            value: e.target.value,
          });
        }}
        value={job_title}
        label="Job Title"
        placeholder="e.g. Frontend Developer"
      />
      <TextBox
        onChange={(e) =>
          setEmploymentHistory({
            _key,
            key: "employer",
            value: e.target.value,
          })
        }
        value={employer}
        label="Employer"
        placeholder=""
      />
      <TextBox
        onChange={(e) =>
          setEmploymentHistory({
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
          setEmploymentHistory({
            _key,
            key: "end",
            value: e.target.value,
          })
        }
        value={end}
        label="End Date"
        placeholder=""
      />
      <div className="col-span-2 pt-2">
        <RichEditor
          onChange={(value) =>
            setEmploymentHistory({
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

export const EmploymentHistory = () => {
  const { state, addEmploymentHistory, setEmploymentHistory } =
    useResumeAction();
  console.log(" re render ");
  return (
    <ExpandibleSection
      title="Employment History"
      onAddMore={() => {
        addEmploymentHistory();
      }}
      data={state.employment_history.map((item) => {
        return {
          title: item.job_title || "Job Title",
          description: item.employer || "Your Company",
          _key: item._key,
          Child: (order: number, _key: number) => (
            <EmploymentHistoryBlock order={order} _key={_key} />
          ),
        };
      })}
      onReorder={(newOrder) => {
        newOrder.map((_key, index) => {
          setEmploymentHistory({
            _key: _key,
            key: "index",
            value: index,
          });
        });
      }}
    ></ExpandibleSection>
  );
};
