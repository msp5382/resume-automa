import { Action, State } from "../useResumeData";

export const setSectionTitleReducer = (state: State, action: Action) => {
  const newTitleMap = {
    ...state.title_map,
    [action.payload.section]: action.payload.title,
  };

  return {
    ...state,
    title_map: newTitleMap,
  };
};
