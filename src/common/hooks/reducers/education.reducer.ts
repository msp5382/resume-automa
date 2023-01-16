import { Action, State } from "../useResumeData";

export const addEducationReducer = (state: State, action: Action) => {
  const newEducation = {
    school: "",
    degree: "",
    start: "",
    end: "",
    city: "",
    description: "",
    index: state.education.length,
    _key: state.education.length,
  };
  return {
    ...state,
    education: [...state.education, newEducation],
  };
};

export const setEducationReducer = (state: State, action: Action) => {
  const { _key, key, value } = action.payload;
  const education = state.education.find((item) => item._key === _key)!;
  education[key] = value;
  return {
    ...state,
    education: [
      ...state.education.filter((item) => item._key !== _key),
      education,
    ],
  };
};
