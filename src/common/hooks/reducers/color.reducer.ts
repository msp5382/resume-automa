import { Action, State } from "../useResumeData";
export const setColorReducer = (state: State, action: Action) => {
  return {
    ...state,
    color: action.payload,
  };
};
