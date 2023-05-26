import {
  NodeID,
  NodeMap,
  Columns,
  Component,
  Page,
  Section,
} from "@/document";
import { Theme } from "@/theme";
import { useScreenStateContext } from "@/document/contexts";

import { Flex, Spinner } from "@chakra-ui/react";
import {
  ColumnsItem,
  ColumnsViewer,
  ComponentViewer,
  SectionViewer,
} from "@/document/components";

type Props = {
  nodeMap: NodeMap;
  id: NodeID;
};

export function Viewer({ nodeMap, id }: Props) {
  const { screen } = useScreenStateContext();
  const node = nodeMap[id];

  if (!node) {
    return (
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        padding={`${Theme.sizes.grid * 3}px`}
        border={`3px dashed ${Theme.colorPalette.theme}`}
      >
        <Spinner />
      </Flex>
    );
  }

  if (node.role instanceof Page) {
    const grandchildren = node.getChildren(nodeMap);
    return (
      <>
        {grandchildren.map((node) => {
          return (
            <Viewer
              key={node.id}
              nodeMap={nodeMap}
              id={node.id}
            />
          );
        })}
      </>
    );
  } else if (node.role instanceof Section) {
    const grandchildren = node.getChildren(nodeMap);
    return (
      <SectionViewer key={node.id} section={node.role}>
        {grandchildren.map((node) => {
          return (
            <Viewer
              key={node.id}
              nodeMap={nodeMap}
              id={node.id}
            />
          );
        })}
      </SectionViewer>
    );
  } else if (node.role instanceof Columns) {
    const grandchildren = node.getChildren(nodeMap);
    return (
      <ColumnsViewer key={node.id} columns={node.role}>
        {grandchildren.map((node) => {
          return (
            <ColumnsItem
              key={node.id}
              flexGrow={
                node.role.attributes.repeat?.getValueOfScreen(screen) > 0
                  ? 1
                  : 0
              }
            >
              <Viewer nodeMap={nodeMap} id={node.id} />
            </ColumnsItem>
          );
        })}
      </ColumnsViewer>
    );
  } else if (node.role instanceof Component) {
    return (
      <ComponentViewer key={node.id} component={node.role} />
    );
  } else {
    throw new Error("Unreachable");
  }
}
