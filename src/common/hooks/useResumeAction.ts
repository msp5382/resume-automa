import { useContext } from "react";
import { ResumeContext } from "../contexts/resumeContext";
import { ActionType } from "./useResumeData";

type TextBox = {
  [key: string]: string;
};

type AddAble = {
  _key: number;
};

type EmploymentHistory = {
  key: string;
  value: string | number;
} & AddAble;

export const useResumeAction = () => {
  const { state, dispatch } = useContext(ResumeContext);
  console.log(state.employment_history);
  return {
    state,
    setPersonalProfile: (payload: TextBox) =>
      dispatch({ type: ActionType.SET_PERSONAL_PROFILE, payload }),
    setProfessionalSummary: (payload: TextBox) =>
      dispatch({ type: ActionType.SET_PROFESSIONAL_SUMMARY, payload }),
    addEmploymentHistory: () =>
      dispatch({ type: ActionType.ADD_EMPLOYMENT_HISTORY }),
    setEmploymentHistory: (payload: EmploymentHistory) =>
      dispatch({ type: ActionType.SET_EMPLOYMENT_HISTORY, payload }),
  };
};
