import { Action, State } from "../useResumeData";

export const setProfessionalSummaryReducer = (state: State, action: Action) => {
  return {
    ...state,
    professional_summary: {
      ...state.professional_summary,
      ...action.payload,
    },
  };
};
