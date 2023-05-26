import { createContext, useContext, useState } from "react";
import { Screen, BreakPoints } from "@/document";
import { useThemeContext } from ".";

export type ScreenState = {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  screen: Screen;
};

export const ScreenStateContext = createContext<ScreenState>(null as any);

export function useScreenState(breakPoints: BreakPoints): ScreenState {
  const [width, setWidth] = useState(1440);

  return {
    width,
    setWidth,
    screen: Screen.fromWidth(width, breakPoints),
  };
}

export function useScreenStateContext() {
  return useContext(ScreenStateContext);
}

type Props = {
  children: React.ReactNode;
};

export function ScreenStateContextProvider({ children }: Props) {
  const { breakPoints } = useThemeContext();
  const screenState = useScreenState(breakPoints);

  return (
    <ScreenStateContext.Provider value={screenState}>
      {children}
    </ScreenStateContext.Provider>
  );
}
