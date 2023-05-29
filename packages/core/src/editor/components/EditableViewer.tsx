import { NodeID, Columns, Component, Page, Section } from "@/document";
import { Theme } from "@/theme";

import { Flex, Spinner } from "@chakra-ui/react";
import {
  ColumnsItem,
  ColumnsViewer,
  ComponentViewer,
  SectionViewer,
} from "@/document/components";
import { Editable, AddColumnsOrComponent } from "@/editor/components";
import { useEditorStateContext } from "@/editor/contexts";

type Props = {
  id: NodeID;
};

export function EditableViewer({ id }: Props) {
  const { nodeMap } = useEditorStateContext();
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
          return <EditableViewer key={node.id} id={node.id} />;
        })}
      </>
    );
  } else if (node.role instanceof Section) {
    const grandchildren = node.getChildren(nodeMap);
    return (
      <Editable key={node.id} id={node.id}>
        <SectionViewer key={node.id} section={node.role}>
          {grandchildren.map((node) => {
            return <EditableViewer key={node.id} id={node.id} />;
          })}
        </SectionViewer>
      </Editable>
    );
  } else if (node.role instanceof Columns) {
    const grandchildren = node.getChildren(nodeMap);
    return (
      <Editable key={node.id} id={node.id}>
        <ColumnsViewer columns={node.role}>
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
                <EditableViewer id={node.id} />
              </ColumnsItem>
            );
          })}

          {grandchildren.length < 1 && (
            <ColumnsItem flexGrow={0}>
              <AddColumnsOrComponent nodeId={node.id} />
            </ColumnsItem>
          )}
        </ColumnsViewer>
      </Editable>
    );
  } else if (node.role instanceof Component) {
    return (
      <Editable key={node.id} id={node.id}>
        <ComponentViewer key={node.id} component={node.role} />
      </Editable>
    );
  } else {
    throw new Error("Unreachable");
  }
}
