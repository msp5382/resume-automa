import { useReducer } from "react";
import { ResumeContextType } from "../contexts/resumeContext";
import { setPersonalProfileReducer } from "./reducers/personalProfile.reducer";
import { initialState } from "./initialState";
import { setProfessionalSummaryReducer } from "./reducers/professionalSummary.reducer";
import {
  setEmploymentHistoryReducer,
  addEmploymentHistoryReducer,
} from "./reducers/employmentHistory.reducer";
import {
  addEducationReducer,
  setEducationReducer,
} from "./reducers/education.reducer";
import { addSkillReducer, setSkillReducer } from "./reducers/skill.reducer";
import { setSectionTitleReducer } from "./reducers/sectionTitle.reducer";
import { setColorReducer } from "./reducers/color.reducer";

export type State = {
  title_map: {
    [key: string]: string;
  };
  personal_profile: {
    [key: string]: any;
  };
  professional_summary: {
    [key: string]: any;
  };
  employment_history: {
    [key: string]: any;
  }[];
  education: {
    [key: string]: any;
  }[];
  skill: {
    [key: string]: any;
  }[];
};

export type Action = {
  type: string;
  payload: any;
};

export enum ActionType {
  SET_SECTION_TITLE = "SET_SECTION_TITLE",
  // Personal Profile
  SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE",
  // Professional Summary
  SET_PROFESSIONAL_SUMMARY = "SET_PROFESSIONAL_SUMMARY",
  // Employment History
  ADD_EMPLOYMENT_HISTORY = "ADD_EMPLOYMENT_HISTORY",
  SET_EMPLOYMENT_HISTORY = "SET_EMPLOYMENT_HISTORY",
  DELETE_EMPLOYMENT_HISTORY = "DELETE_EMPLOYMENT_HISTORY",
  // Education
  ADD_EDUCATION = "ADD_EDUCATION",
  SET_EDUCATION = "SET_EDUCATION",
  DELETE_EDUCATION = "DELETE_EDUCATION",
  // Skill
  ADD_SKILL = "ADD_SKILL",
  SET_SKILL = "SET_SKILL",
  DELETE_SKILL = "DELETE_SKILL",
  // Color
  SET_COLOR = "SET_COLOR",
}

function reducer(state: State, action: Action) {
  console.log(action.type);
  switch (action.type) {
    case ActionType.SET_PERSONAL_PROFILE:
      return setPersonalProfileReducer(state, action);
    case ActionType.SET_PROFESSIONAL_SUMMARY:
      return setProfessionalSummaryReducer(state, action);
    case ActionType.ADD_EMPLOYMENT_HISTORY:
      return addEmploymentHistoryReducer(state, action);
    case ActionType.SET_EMPLOYMENT_HISTORY:
      return setEmploymentHistoryReducer(state, action);
    case ActionType.ADD_EDUCATION:
      return addEducationReducer(state, action);
    case ActionType.SET_EDUCATION:
      return setEducationReducer(state, action);
    case ActionType.ADD_SKILL:
      return addSkillReducer(state, action);
    case ActionType.SET_SKILL:
      return setSkillReducer(state, action);
    case ActionType.SET_SECTION_TITLE:
      return setSectionTitleReducer(state, action);
    case ActionType.SET_COLOR:
      return setColorReducer(state, action);
    default:
      throw new Error();
  }
}

export const useResumeData = (): ResumeContextType => {
  const [state, dispatch] = useReducer(reducer, initialState as State);
  return { state, dispatch };
};
