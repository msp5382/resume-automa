import { createContext } from "react";
import { State } from "../hooks/useResumeData";

export type ResumeContextType = {
  state: State;
  dispatch: (action: any) => void;
};

export const ResumeContext = createContext<ResumeContextType>({
  state: {} as State,
  dispatch: () => {},
} as ResumeContextType);
