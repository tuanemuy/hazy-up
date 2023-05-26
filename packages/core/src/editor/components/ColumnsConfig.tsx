import { useState, useEffect } from "react";
import { Node, Columns } from "@/document";
import { Theme } from "@/theme";
import { useScreenStateContext } from "@/document/contexts";
import { useEditorStateContext } from "@/editor/contexts";

import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
  Select,
  Switch,
} from "@chakra-ui/react";

type Props = {
  node: Node;
};

export function ColumnsConfig({ node }: Props) {
  const { screen } = useScreenStateContext();
  const { updateNode } = useEditorStateContext();

  const attrs = node.role.attributes;

  const initialSpacing = attrs.spacing.getValueOfScreen(screen);
  const initialRepeat = attrs.repeat.getValueOfScreen(screen);
  const initialGap = attrs.gap.getValueOfScreen(screen);

  const [spacing, setSpacing] = useState(initialSpacing);
  const [justifyContent, setJustifyContent] = useState(attrs.justifyContent);
  const [alignItems, setAlignItems] = useState(attrs.alignItems);
  const [repeat, setRepeat] = useState(initialRepeat);
  const [gap, setGap] = useState(initialGap);
  const [flexWrap, setFlexWrap] = useState(attrs.flexWrap);

  useEffect(() => {
    const initialSpacing = attrs.spacing.getValueOfScreen(screen);
    const initialRepeat = attrs.repeat.getValueOfScreen(screen);
    const initialGap = attrs.gap.getValueOfScreen(screen);

    setSpacing(initialSpacing);
    setRepeat(initialRepeat);
    setGap(initialGap);
  }, [screen]);

  useEffect(() => {
    updateNode(
      node.id,
      Node.generate({
        ...node,
        role: Columns.generate({
          spacing: attrs.spacing.replaceValueOfScreen(screen, spacing),
          justifyContent,
          alignItems,
          repeat: attrs.repeat.replaceValueOfScreen(screen, repeat),
          gap: attrs.gap.replaceValueOfScreen(screen, gap),
          flexWrap,
        }),
      })
    );
  }, [spacing, justifyContent, alignItems, repeat, gap, flexWrap]);

  return (
    <Flex alignItems="center" gap={`${Theme.sizes.grid}px`}>
      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 6}px`}
      >
        <InputGroup size="sm">
          <Input
            type="number"
            min="0"
            value={spacing}
            onChange={(e) => setSpacing(parseFloat(e.target.value))}
          />
          <InputRightAddon children="box" />
        </InputGroup>
        <Text fontSize=".5rem">Spacing</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 9}px`}
      >
        <Select
          value={justifyContent}
          onChange={(e) => setJustifyContent(e.target.value)}
          size="sm"
        >
          <option value="normal">normal</option>
          <option value="flex-start">start</option>
          <option value="flex-end">end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
          <option value="stretch">stretch</option>
        </Select>
        <Text fontSize=".5rem">Justify content</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 9}px`}
      >
        <Select
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value)}
          size="sm"
        >
          <option value="normal">normal</option>
          <option value="flex-start">start</option>
          <option value="flex-end">end</option>
          <option value="center">center</option>
          <option value="baseline">baseline</option>
          <option value="stretch">stretch</option>
        </Select>
        <Text fontSize=".5rem">Align items</Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center" gap={`${Theme.sizes.grid * 0.5}px`}>
          <Switch
            isChecked={repeat > -1}
            onChange={(e) => setRepeat(e.target.checked ? 3 : -1)}
            size="sm"
          />
          {repeat > -1 && (
            <Input
              type="number"
              min="1"
              value={repeat || 1}
              onChange={(e) => setRepeat(parseInt(e.target.value, 10))}
              size="sm"
              width={`${Theme.sizes.grid * 3}px`}
            />
          )}
        </Flex>
        <Text fontSize=".5rem">Repeat</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="center"
        width={`${Theme.sizes.grid * 6}px`}
      >
        <InputGroup size="sm">
          <Input
            type="number"
            min="0"
            value={gap}
            onChange={(e) => setGap(parseFloat(e.target.value))}
          />
          <InputRightAddon children="grid" />
        </InputGroup>
        <Text fontSize=".5rem">Gap</Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center">
        <Switch
          type="number"
          isChecked={flexWrap}
          onChange={(e) => setFlexWrap(e.target.checked)}
        />
        <Text fontSize=".5rem">Flex wrap</Text>
      </Flex>
    </Flex>
  );
}
