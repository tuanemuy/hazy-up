import { Section, Columns, Component, Template, Image } from "@/document";
import { Theme } from "@/theme";
import { useEditorStateContext } from "@/editor/contexts";

import {
  Box,
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
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  AddIcon,
  DeleteIcon,
  CopyIcon,
} from "@chakra-ui/icons";
import { RxColumns, RxComponent2 } from "react-icons/rx";

export function Actions() {
  const {
    nodeMap,
    focusedNode,
    removeFocused,
    addColumns,
    addComponent,
    moveBack,
    moveForward,
  } = useEditorStateContext();
  const focusedParent = focusedNode?.parentId
    ? nodeMap[focusedNode.parentId]
    : null;

  return (
    <Box
      position="absolute"
      zIndex="999"
      right={`${Theme.sizes.grid * 0.75}px`}
      top={`${Theme.sizes.grid * 0.75}px`}
    >
      <Flex gap={`${Theme.sizes.grid * 0.5}px`}>
        {focusedNode?.role instanceof Section && (
          <>
            {focusedNode.prev && (
              <IconButton
                aria-label="Move up"
                icon={<ArrowUpIcon />}
                onClick={moveBack}
              />
            )}

            {focusedNode.next && (
              <IconButton
                aria-label="Move down"
                icon={<ArrowDownIcon />}
                onClick={moveForward}
              />
            )}
          </>
        )}

        {focusedParent?.role instanceof Section && (
          <>
            {focusedNode?.prev && (
              <IconButton
                aria-label="Move up"
                icon={<ArrowUpIcon />}
                onClick={moveBack}
              />
            )}

            {focusedNode?.next && (
              <IconButton
                aria-label="Move down"
                icon={<ArrowDownIcon />}
                onClick={moveForward}
              />
            )}
          </>
        )}

        {focusedParent?.role instanceof Columns && (
          <>
            {focusedNode?.prev && (
              <IconButton
                aria-label="Move left"
                icon={<ArrowBackIcon />}
                onClick={moveBack}
              />
            )}
            {focusedNode?.next && (
              <IconButton
                aria-label="Move right"
                icon={<ArrowForwardIcon />}
                onClick={moveForward}
              />
            )}
          </>
        )}

        {focusedNode?.role instanceof Section && (
          <IconButton
            aria-label="Add"
            icon={<AddIcon />}
            onClick={addColumns}
          />
        )}

        {focusedNode?.role instanceof Columns && (
          <Popover>
            <PopoverTrigger>
              <IconButton aria-label="Add" icon={<AddIcon />} />
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
                        onClick={() =>
                          addComponent({
                            template: Template.generate({
                              name: "",
                              url: "",
                              thumbnail: Image.generate({
                                src: "",
                                assets: [],
                              }),
                            }),
                            props: {},
                          })
                        }
                      />
                      <Text fontSize="xs">Component</Text>
                    </Flex>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}

        {focusedNode?.role instanceof Component && (
          <IconButton aria-label="Duplicate" icon={<CopyIcon />} />
        )}

        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={removeFocused}
        />
      </Flex>
    </Box>
  );
}
