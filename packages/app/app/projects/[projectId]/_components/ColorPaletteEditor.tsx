import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Theme } from "@hazy-up/core/theme";
import { useAction } from "@/lib/trpc/client";
import { RouterOutputs } from "@/lib/trpc/shared";
import { useZodForm } from "@/lib/form";
import { editColorPalette } from "../_actions";
import { editColorPaletteSchema } from "../_schema";

import {
  VStack,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

type Props = {
  colorPalette: RouterOutputs["colorPalette"]["byProjectId"];
};

export function ColorPaletteEditor({ colorPalette }: Props) {
  const mutation = useAction(editColorPalette);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: editColorPaletteSchema,
    defaultValues: { ...colorPalette },
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof editColorPaletteSchema>
  > = async (values) => {
    await mutation.mutateAsync(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <datalist id="palette">
        {Object.values(colorPalette).map((color) => {
          return <option value={color} />;
        })}
      </datalist>

      <VStack align="start" spacing={`${Theme.sizes.grid}px`}>
        <FormControl isInvalid={errors.theme !== undefined}>
          <FormLabel htmlFor="theme">Theme</FormLabel>
          <input
            id="theme"
            type="color"
            list="palette"
            {...register("theme", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {errors.theme && errors.theme.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.accent !== undefined}>
          <FormLabel htmlFor="accent">Accent</FormLabel>
          <input
            id="accent"
            type="color"
            list="palette"
            {...register("accent", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {errors.accent && errors.accent.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.background !== undefined}>
          <FormLabel htmlFor="background">Background</FormLabel>
          <input
            id="background"
            type="color"
            list="palette"
            {...register("background", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {errors.background && errors.background.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.black !== undefined}>
          <FormLabel htmlFor="black">Black</FormLabel>
          <input
            id="black"
            type="color"
            list="palette"
            {...register("black", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {errors.black && errors.black.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.white !== undefined}>
          <FormLabel htmlFor="white">White</FormLabel>
          <input
            id="white"
            type="color"
            list="palette"
            {...register("white", { required: "入力してください" })}
          />
          <FormErrorMessage>
            {errors.white && errors.white.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={isSubmitting}>
          Save
        </Button>
      </VStack>
    </form>
  );
}
