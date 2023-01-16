import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";
import { ActionType } from "./useResumeData";

type TextBox = {
  [key: string]: string;
};

type AddAble = {
  _key: number;
};

type Expandable = {
  key: string;
  value: string | number;
} & AddAble;

type SectionTitle = {
  title: string;
  section: string;
};

export const useResumeAction = () => {
  const { state, dispatch } = useContext(ResumeContext);
  return {
    state,
    setPersonalProfile: (payload: TextBox) =>
      dispatch({ type: ActionType.SET_PERSONAL_PROFILE, payload }),
    setProfessionalSummary: (payload: TextBox) =>
      dispatch({ type: ActionType.SET_PROFESSIONAL_SUMMARY, payload }),
    addEmploymentHistory: () =>
      dispatch({ type: ActionType.ADD_EMPLOYMENT_HISTORY }),
    setEmploymentHistory: (payload: Expandable) =>
      dispatch({ type: ActionType.SET_EMPLOYMENT_HISTORY, payload }),
    addEducation: () => dispatch({ type: ActionType.ADD_EDUCATION }),
    setEducation: (payload: Expandable) =>
      dispatch({ type: ActionType.SET_EDUCATION, payload }),
    addSkill: () => dispatch({ type: ActionType.ADD_SKILL }),
    setSkill: (payload: Expandable) =>
      dispatch({ type: ActionType.SET_SKILL, payload }),
    setSectionTitle: (payload: SectionTitle) =>
      dispatch({ type: ActionType.SET_SECTION_TITLE, payload }),
    setColor: (payload: string) =>
      dispatch({
        type: ActionType.SET_COLOR,
        payload,
      }),
  };
};
