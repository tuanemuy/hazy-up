import { ReactNode, createContext, useContext } from "react";
import { css } from "@emotion/css";
import { Theme } from "@/document";

import { Box } from "@chakra-ui/react";

export const ThemeContext = createContext<Theme>(null as any);

export function useThemeContext() {
  return useContext(ThemeContext);
}

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const { sizes, colorPalette } = theme;

  const cssVars = css`
    --grid: ${sizes.grid}px;
    --base-padding: ${sizes.box}px;
    --theme: ${colorPalette.theme};
    --accent: ${colorPalette.accent};
    --background: ${colorPalette.background};
    --black: ${colorPalette.black};
    --white: ${colorPalette.white};
  `;

  return (
    <ThemeContext.Provider value={Theme.generateDefault()}>
      <Box className={cssVars}>{children}</Box>
    </ThemeContext.Provider>
  );
}
