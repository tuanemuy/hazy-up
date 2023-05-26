import { useState, useEffect } from "react";
import { Node, Page } from "@/document";
import { Theme } from "@/theme";
import { useEditorStateContext } from "@/editor/contexts";

import { Flex, Text, Input } from "@chakra-ui/react";

type Props = {
  node: Node;
};

export function PageConfig({ node }: Props) {
  const attrs = node.role.attributes;
  const [name, setName] = useState(attrs.name);
  const [path, setPath] = useState(attrs.path);

  const { nodeMap, updateNodeMap } = useEditorStateContext();

  useEffect(() => {
    const newNodeMap = { ...nodeMap };
    newNodeMap[node.id] = Node.generate({
      ...node,
      role: Page.generate({
        name,
        path,
      }),
    });
    updateNodeMap(newNodeMap);
  }, [name, path]);

  return (
    <Flex gap={`${Theme.sizes.grid}px`}>
      <Flex flexDirection="column" alignItems="center">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="sm"
        />
        <Text fontSize=".5rem">Name</Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center">
        <Input
          value={path}
          onChange={(e) => setPath(e.target.value)}
          size="sm"
        />
        <Text fontSize=".5rem">Path</Text>
      </Flex>
    </Flex>
  );
}
