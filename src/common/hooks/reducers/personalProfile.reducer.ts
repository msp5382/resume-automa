import { Action, State } from "../useResumeData";

export const setPersonalProfileReducer = (state: State, action: Action) => {
  return {
    ...state,
    personal_profile: {
      ...state.personal_profile,
      ...action.payload,
    },
  };
};
