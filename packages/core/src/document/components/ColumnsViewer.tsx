import { ReactNode, createContext } from "react";
import { Columns } from "@/document";
import { useThemeContext, useScreenStateContext } from "@/document/contexts";

import { Flex, Box } from "@chakra-ui/react";

export const ColumnsContext = createContext<{
  itemWidth: string;
  itemShrink: number;
}>(null as any);

type ColumnsProps = {
  columns: Columns;
  children: ReactNode;
};

export function ColumnsViewer({ columns, children }: ColumnsProps) {
  const { sizes } = useThemeContext();
  const { screen } = useScreenStateContext();
  const { spacing, justifyContent, alignItems, repeat, gap, flexWrap } =
    columns.attributes;
  const itemWidth =
    repeat && repeat.getValueOfScreen(screen) > 0
      ? `calc((100% - ${
          gap.getValueOfScreen(screen) *
          sizes.grid *
          (repeat.getValueOfScreen(screen) - 1)
        }px) / ${repeat.getValueOfScreen(screen)})`
      : "auto";
  const itemShrink = flexWrap ? 0 : 1;

  return (
    <ColumnsContext.Provider value={{ itemWidth, itemShrink }}>
      <Box
        position="relative"
        width={repeat ? "100%" : "auto"}
        paddingTop={`${spacing.getValueOfScreen(screen) * sizes.box}px`}
      >
        <Flex
          justifyContent={justifyContent}
          alignItems={alignItems}
          flexWrap={flexWrap ? "wrap" : "nowrap"}
          position="relative"
          gap={gap ? `${gap.getValueOfScreen(screen) * sizes.grid}px` : "0"}
        >
          {children}
        </Flex>
      </Box>
    </ColumnsContext.Provider>
  );
}
