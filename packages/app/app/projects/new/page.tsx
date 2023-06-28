"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Theme } from "@hazy-up/core/theme";
import { RouterInputs } from "@/lib/trpc/shared";
import { api } from "@/lib/trpc/client";

import {
  VStack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { RootLayout } from "@/components/layout";

export default function Page() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RouterInputs["project"]["add"]>();

  const onSubmit: SubmitHandler<RouterInputs["project"]["add"]> = async (
    values
  ) => {
    const project = await api.project.add.mutate(values);
    router.push(`/projects/${project.id}`);
  };

  return (
    <RootLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={`${Theme.sizes.grid}px`} align="start">
          <FormControl isInvalid={errors.name !== undefined}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Project name"
              {...register("name", { required: "入力してください" })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" isLoading={isSubmitting}>
            Add
          </Button>
        </VStack>
      </form>
    </RootLayout>
  );
}
