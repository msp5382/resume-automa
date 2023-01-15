import { useState } from "react";
import { TextBox } from "./forms/common/TextBox";
import { EmploymentHistory } from "./forms/EmploymentHistory";
import { ExpandibleSection } from "./forms/ExpandibleSection";
import { PersonalDetails } from "./forms/PersonalDetails";
import { ProfessionalSummary } from "./forms/ProfessionalSummary";
export const Editor = () => {
  return (
    <div className="py-10 px-5 flex flex-col martian-mono gap-4 h-screen overflow-scroll">
      <div className="mx-auto text-2xl font-bold antialiased">Your Resume</div>
      <PersonalDetails />
      <ProfessionalSummary />
      <EmploymentHistory />
    </div>
  );
};
