"use client";

import { useRef } from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useDisclosure } from "@chakra-ui/react";
import { Theme } from "@hazy-up/core/theme";
import { useAction } from "@/lib/trpc/client";
import { RouterOutputs } from "@/lib/trpc/shared";
import { useZodForm } from "@/lib/form";
import { Unpacked } from "@/types";
import { addPage, removePage } from "../_actions";
import { addPageSchema } from "../_schema";

import { Suspense } from "react";
import NextLink from "next/link";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormErrorMessage,
  FormControl,
  Input,
  IconButton,
  Button,
  LinkBox,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

type Props = {
  projectId: string;
  pages: RouterOutputs["page"]["list"];
};

export function PageList({ projectId, pages }: Props) {
  const addMutation = useAction(addPage);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: addPageSchema,
    defaultValues: {
      projectId,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof addPageSchema>> = async (
    value
  ) => {
    await addMutation.mutateAsync(value);
    reset();
  };

  return (
    <VStack spacing={`${Theme.sizes.box * 0.5}px`} align="end">
      <TableContainer width="100%">
        <Table>
          <Thead>
            <Tr>
              <Th>Path</Th>
              <Th>Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Suspense>
              {pages.map((page) => {
                return (
                  <LinkBox key={page.id} as={Tr}>
                    <Td width={`${Theme.sizes.box * 3}px`}>{page.path}</Td>
                    <Td>{page.name}</Td>
                    <Td width="0.1%" whiteSpace="nowrap">
                      <Flex
                        gap={`${Theme.sizes.grid}px`}
                        justifyContent="flex-end"
                      >
                        <IconButton
                          as={NextLink}
                          href={`/projects/${projectId}/pages/${page.id}`}
                          aria-label="edit"
                          size="sm"
                          variant="outline"
                          icon={<EditIcon />}
                        />
                        <RemovePageButton page={page} />
                      </Flex>
                    </Td>
                  </LinkBox>
                );
              })}
            </Suspense>
          </Tbody>
        </Table>
      </TableContainer>

      <form action={addPage} onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={`${Theme.sizes.grid}px`}>
          <FormControl isInvalid={errors.path !== undefined}>
            <Input
              id="path"
              placeholder="Path"
              {...register("path", { required: "入力してください" })}
            />
            <FormErrorMessage>
              {errors.path && errors.path.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name !== undefined}>
            <Input
              id="name"
              placeholder="Name"
              {...register("name", { required: "入力してください" })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" isLoading={isSubmitting}>
            Add
          </Button>
        </Flex>
      </form>
    </VStack>
  );
}

type RemovePageButtonProps = {
  page: Unpacked<RouterOutputs["page"]["list"]>;
};

function RemovePageButton({ page }: RemovePageButtonProps) {
  const removeDialog = useDisclosure();
  const cancelRemoveRef = useRef(null);
  const removeMutation = useAction(removePage);

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={removeDialog.onOpen}
        size="sm"
        colorScheme="red"
        variant="outline"
        icon={<DeleteIcon />}
      />
      <AlertDialog
        leastDestructiveRef={cancelRemoveRef}
        onClose={removeDialog.onClose}
        isOpen={removeDialog.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Remove Page?</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to remove page "{page.name}"
          </AlertDialogBody>
          <AlertDialogFooter>
            <Flex justifyContent="flex-end" gap={`${Theme.sizes.grid}px`}>
              <Button ref={cancelRemoveRef} onClick={removeDialog.onClose}>
                No
              </Button>
              <Button
                onClick={async () =>
                  await removeMutation.mutateAsync({
                    id: page.id,
                  })
                }
                colorScheme="red"
              >
                Yes
              </Button>
            </Flex>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
