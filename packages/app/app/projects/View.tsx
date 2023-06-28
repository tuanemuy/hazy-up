"use client";

import { RouterOutputs } from "@/lib/trpc/shared";
import { Theme } from "@hazy-up/core/theme";

import {
  VStack,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  projects: any[];
};

export function View({ projects }: Props) {
  return (
    <VStack spacing={`${Theme.sizes.box * 0.5}px`} align="stretch">
      <Flex justifyContent="space-between" gap={`${Theme.sizes.grid}px`}>
        <Input placeholder="Search" />

        <Button as={NextLink} href="/projects/new">
          Add New
        </Button>
      </Flex>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
            </Tr>
          </Thead>

          <Tbody>
            {projects.map((project) => {
              return (
                <LinkBox key={project.id} as={Tr}>
                  <Td width="100%">
                    <LinkOverlay as={NextLink} href={`/projects/${project.id}`}>
                      {project.name}
                    </LinkOverlay>
                  </Td>
                </LinkBox>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
}
