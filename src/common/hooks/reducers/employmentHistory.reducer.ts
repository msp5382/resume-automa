import { Action, State } from "../useResumeData";

export const addEmploymentHistoryReducer = (state: State, action: Action) => {
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
};

export const setEmploymentHistoryReducer = (state: State, action: Action) => {
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
};
