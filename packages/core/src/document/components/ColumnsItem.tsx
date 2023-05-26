import { ReactNode, useContext } from "react";
import { ColumnsContext } from "./ColumnsViewer";

import { Flex } from "@chakra-ui/react";

type Props = {
  flexGrow: number;
  children: ReactNode;
};

export function ColumnsItem({ flexGrow, children }: Props) {
  const { itemWidth, itemShrink } = useContext(ColumnsContext);

  return (
    <Flex
      position="relative"
      zIndex="2"
      flexShrink={itemShrink}
      flexGrow={flexGrow}
      width={itemWidth}
      maxWidth="100%"
    >
      {children}
    </Flex>
  );
}
