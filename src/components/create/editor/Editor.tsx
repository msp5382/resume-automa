import { useState } from "react";
import { TextBox } from "./forms/common/TextBox";
import { Education } from "./forms/Education";
import { EmploymentHistory } from "./forms/EmploymentHistory";
import { ExpandibleSection } from "./forms/common/ExpandibleSection";
import { PersonalDetails } from "./forms/PersonalDetails";
import { ProfessionalSummary } from "./forms/ProfessionalSummary";
import { Skill } from "./forms/Skill";
import { Style } from "./forms/Style";
import { useResumeData } from "@/common/hooks/useResumeData";
import { useResumeAction } from "@/common/hooks/useResumeAction";
export const Editor = () => {
  const { state } = useResumeAction();
  console.log("Editor", state);
  return (
    <div className="py-10 px-5 flex flex-col martian-mono gap-4 h-screen overflow-scroll">
      <div className="mx-auto text-2xl font-bold antialiased">Your Resume</div>
      <PersonalDetails />
      <ProfessionalSummary />
      <EmploymentHistory />
      <Education />
      <Skill />
      <Style />
    </div>
  );
};
