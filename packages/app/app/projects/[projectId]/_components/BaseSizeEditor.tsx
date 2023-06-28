import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Theme } from "@hazy-up/core/theme";
import { useAction } from "@/lib/trpc/client";
import { RouterOutputs } from "@/lib/trpc/shared";
import { useZodForm } from "@/lib/form";
import { editBaseSize } from "../_actions";
import { editBaseSizeSchema } from "../_schema";

import {
  VStack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

type Props = {
  baseSize: RouterOutputs["baseSize"]["byProjectId"];
};

export function BaseSizeEditor({ baseSize }: Props) {
  const mutation = useAction(editBaseSize);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: editBaseSizeSchema,
    defaultValues: { ...baseSize },
  });

  const onSubmit: SubmitHandler<z.infer<typeof editBaseSizeSchema>> = async (
    values
  ) => {
    await mutation.mutateAsync(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack align="start" spacing={`${Theme.sizes.grid}px`}>
        <FormControl isInvalid={errors.grid !== undefined}>
          <FormLabel htmlFor="grid">Grid</FormLabel>
          <Input
            id="grid"
            {...register("grid", {
              required: "入力してください",
              pattern: /^[0-9]+(\.[0-9]+)?(px|pt|rem)$/,
            })}
          />
          <FormErrorMessage>
            {errors.grid && errors.grid.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.box !== undefined}>
          <FormLabel htmlFor="box">Box</FormLabel>
          <Input
            id="box"
            {...register("box", {
              required: "入力してください",
              pattern: /^[0-9]+(\.[0-9]+)?(px|pt|rem)$/,
            })}
          />
          <FormErrorMessage>
            {errors.box && errors.box.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={isSubmitting}>
          Save
        </Button>
      </VStack>
    </form>
  );
}
