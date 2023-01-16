import { Action, State } from "../useResumeData";

export const addSkillReducer = (state: State, action: Action) => {
  const newSkill = {
    skill: "",
    level: "",
    index: state.skill.length,
    _key: state.skill.length,
  };
  return {
    ...state,
    skill: [...state.skill, newSkill],
  };
};

export const setSkillReducer = (state: State, action: Action) => {
  const { _key, key, value } = action.payload;
  const skill = state.skill.find((item) => item._key === _key)!;
  skill[key] = value;
  return {
    ...state,
    skill: [...state.skill.filter((item) => item._key !== _key), skill],
  };
};
