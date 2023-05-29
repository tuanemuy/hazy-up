import { useDisclosure } from "@chakra-ui/react";
import { Theme } from "@/theme";
import { NodeID } from "@/document";
import { useEditorStateContext } from "@/editor/contexts";

import {
  Flex,
  IconButton,
  Icon,
  Text,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverCloseButton,
  Portal,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { RxColumns, RxComponent2 } from "react-icons/rx";
import { SelectTemplateModal } from "./SelectTemplateModal";

type Props = {
  nodeId: NodeID;
};

export function AddColumnsOrComponent({ nodeId }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { focusedId, addColumns, addComponent } = useEditorStateContext();

  return (
    <Flex
      position="relative"
      zIndex="2"
      justifyContent="center"
      alignItems="center"
      flexShrink={0}
      width="100%"
      padding={`${Theme.sizes.grid * 3}px`}
      border={`3px dashed ${Theme.colorPalette.theme}`}
      pointerEvents="none"
    >
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="Add columns"
            icon={<AddIcon />}
            alignSelf="center"
            pointerEvents={focusedId === nodeId ? "auto" : "none"}
            disabled={focusedId !== nodeId}
            opacity={focusedId === nodeId ? 1 : 0.5}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Flex gap={`${Theme.sizes.grid * 0.5}px`}>
                <Flex
                  direction="column"
                  alignItems="center"
                  gap={`${Theme.sizes.grid * 0.5}px`}
                >
                  <IconButton
                    aria-label="Add columns"
                    icon={<Icon as={RxColumns} />}
                    onClick={addColumns}
                  />
                  <Text fontSize="xs">Columns</Text>
                </Flex>
                <Flex
                  direction="column"
                  alignItems="center"
                  gap={`${Theme.sizes.grid * 0.5}px`}
                >
                  <IconButton
                    aria-label="Add component"
                    icon={<Icon as={RxComponent2} />}
                    onClick={onOpen}
                  />
                  <Text fontSize="xs">Component</Text>
                </Flex>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <SelectTemplateModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={(template, defaultProps) => {
          addComponent({
            template,
            props: {
              ...defaultProps,
            },
          });
          onClose();
        }}
      />
    </Flex>
  );
}
