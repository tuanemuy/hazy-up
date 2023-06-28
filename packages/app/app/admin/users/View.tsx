"use client";

import { RouterOutputs } from "@/lib/trpc/shared";
import { Theme } from "@hazy-up/core/theme";

import {
  Flex,
  IconButton,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

type Props = {
  users: RouterOutputs["user"]["list"];
};

export function View({ users }: Props) {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        <Tbody>
          {users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Flex gap={`${Theme.sizes.grid * 0.5}px`}>
                    <IconButton
                      aria-label="Edit user"
                      as={NextLink}
                      href={`/admin/users/${user.id}`}
                      icon={<EditIcon />}
                      size="sm"
                      variant="outline"
                    />
                    <IconButton
                      aria-label="Delete user"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      variant="outline"
                    />
                  </Flex>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
