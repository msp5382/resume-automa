import { useContext, useReducer } from "react";
import { ResumeContext, ResumeContextType } from "../contexts/resumeContext";

export type State = {
  personal_profile: {
    [key: string]: any;
  };
  professional_summary: {
    [key: string]: any;
  };
  employment_history: {
    [key: string]: any;
  }[];
};

type Action = {
  type: string;
  payload: any;
};

export enum ActionType {
  SET_PERSONAL_PROFILE = "SET_PERSONAL_PROFILE",
  SET_PROFESSIONAL_SUMMARY = "SET_PROFESSIONAL_SUMMARY",
  ADD_EMPLOYMENT_HISTORY = "ADD_EMPLOYMENT_HISTORY",
  SET_EMPLOYMENT_HISTORY = "SET_EMPLOYMENT_HISTORY",
  DELETE_EMPLOYMENT_HISTORY = "DELETE_EMPLOYMENT_HISTORY",
}

const initialState = {
  personal_profile: {
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  },
  professional_summary: {
    summary: "",
  },
  employment_history: [
    {
      job_title: "",
      employer: "",
      start: "",
      end: "",
      city: "",
      description: "",
      index: 0,
      _key: 0,
    },
  ],
};

function reducer(state: State, action: Action) {
  console.log(action.type);
  switch (action.type) {
    case ActionType.SET_PERSONAL_PROFILE:
      return {
        ...state,
        personal_profile: {
          ...state.personal_profile,
          ...action.payload,
        },
      };
    case ActionType.SET_PROFESSIONAL_SUMMARY:
      return {
        ...state,
        professional_summary: {
          ...state.professional_summary,
          ...action.payload,
        },
      };
    case ActionType.ADD_EMPLOYMENT_HISTORY:
      const newEmploymentHistory = {
        job_title: "",
        employer: "",
        start: "",
        end: "",
        city: "",
        description: "",
        index: state.employment_history.length,
        _key: state.employment_history.length,
      };
      return {
        ...state,
        employment_history: [...state.employment_history, newEmploymentHistory],
      };
    case ActionType.SET_EMPLOYMENT_HISTORY:
      const { _key, key, value } = action.payload;
      const employmentHistory = state.employment_history.find(
        (item) => item._key === _key
      )!;
      employmentHistory[key] = value;
      return {
        ...state,
        employment_history: [
          ...state.employment_history.filter((item) => item._key !== _key),
          employmentHistory,
        ],
      };
    default:
      throw new Error();
  }
}

export const useResumeData = (): ResumeContextType => {
  const [state, dispatch] = useReducer(reducer, initialState as State);
  return { state, dispatch };
};
