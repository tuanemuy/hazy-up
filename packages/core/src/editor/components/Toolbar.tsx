import { Page, Section, Columns, Component } from "@/document";
import { Theme } from "@/theme";
import { useEditorStateContext } from "@/editor/contexts";

import { Box, Flex, Divider, Text, Icon, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { RxSection, RxColumns, RxComponent2 } from "react-icons/rx";
import { PageConfig } from "./PageConfig";
import { SectionConfig } from "./SectionConfig";
import { ColumnsConfig } from "./ColumnsConfig";
import { ComponentConfig } from "./ComponentConfig";

type Props = {};

export function Toolbar({}: Props) {
  const { nodeMap, focusedNode, rootNode, undo, redo } =
    useEditorStateContext();

  const focused = focusedNode?.id ? nodeMap[focusedNode.id] : null;

  return (
    <Box width="100%" boxShadow="0px 0px 4px rgba(0, 0, 0, .25)">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding={`${Theme.sizes.grid * 0.25}px ${Theme.sizes.grid * 1}px`}
        backgroundColor={Theme.colorPalette.white}
      >
        {rootNode?.role instanceof Page && (
          <Text fontSize="sm">{rootNode.role.attributes.name}</Text>
        )}

        <Flex>
          <IconButton
            aria-label="undo"
            icon={<ArrowBackIcon boxSize="4" />}
            size="xs"
            backgroundColor="transparent"
            onClick={undo}
          />
          <IconButton
            aria-label="redo"
            icon={<ArrowForwardIcon boxSize="4" />}
            size="xs"
            backgroundColor="transparent"
            onClick={redo}
          />
        </Flex>
      </Flex>

      <Divider />

      {focused && (
        <Flex
          key={focused.id}
          width="100%"
          height={`${Theme.sizes.grid * 4}px`}
          padding={`${Theme.sizes.grid * 0.5}px ${Theme.sizes.grid * 1}px`}
          backgroundColor={Theme.colorPalette.white}
          alignItems="center"
          gap={`${Theme.sizes.grid * 1}px`}
        >
          {focused?.role instanceof Page && (
            <>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={HiOutlineDocumentDuplicate} boxSize={5} />
                <Text fontSize=".5rem">Page</Text>
              </Flex>

              <Divider orientation="vertical" />

              <PageConfig node={focused} />
            </>
          )}

          {focused?.role instanceof Section && (
            <>
              <Flex
                key={focused.id}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={RxSection} />
                <Text fontSize=".5rem">Section</Text>
              </Flex>

              <Divider orientation="vertical" />

              <SectionConfig node={focused} />
            </>
          )}

          {focused?.role instanceof Columns && (
            <>
              <Flex
                key={focused.id}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={RxColumns} />
                <Text fontSize=".5rem">Columns</Text>
              </Flex>

              <Divider orientation="vertical" />

              <ColumnsConfig node={focused} />
            </>
          )}

          {focused?.role instanceof Component && (
            <>
              <Flex
                key={focused.id}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={RxComponent2} />
                <Text fontSize=".5rem">Component</Text>
              </Flex>

              <Divider orientation="vertical" />

              <ComponentConfig node={focused} />
            </>
          )}
        </Flex>
      )}
    </Box>
  );
}
