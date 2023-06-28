"use client";

import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Theme } from "@hazy-up/core/theme";
import { useAction } from "@/lib/trpc/client";
import { RouterOutputs } from "@/lib/trpc/shared";
import { useZodForm } from "@/lib/form";
import { editProject } from "./_actions";
import { editProjectSchema } from "./_schema";

import {
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { PageList } from "./_components/PageList";
import { ColorPaletteEditor } from "./_components/ColorPaletteEditor";
import { BaseSizeEditor } from "./_components/BaseSizeEditor";

type Props = {
  project: RouterOutputs["project"]["byId"];
  pages: RouterOutputs["page"]["list"];
  colorPalette: RouterOutputs["colorPalette"]["byProjectId"];
  baseSize: RouterOutputs["baseSize"]["byProjectId"];
};

export function View({ project, pages, colorPalette, baseSize }: Props) {
  const mutation = useAction(editProject);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useZodForm({
    schema: editProjectSchema,
    defaultValues: {
      id: project.id,
      name: project.name,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof editProjectSchema>> = async (
    values
  ) => {
    await mutation.mutateAsync(values);
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Pages</Tab>
        <Tab>ColorPalette</Tab>
        <Tab>Sizes</Tab>
        <Tab>Settings</Tab>
      </TabList>

      <TabPanels>
        <TabPanel paddingX="0" paddingY={`${Theme.sizes.box * 0.5}px`}>
          <PageList projectId={project.id} pages={pages} />
        </TabPanel>
        <TabPanel>
          <ColorPaletteEditor colorPalette={colorPalette} />
        </TabPanel>
        <TabPanel>
          <BaseSizeEditor baseSize={baseSize} />
        </TabPanel>
        <TabPanel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack align="start" spacing={`${Theme.sizes.grid}px`}>
              <FormControl>
                <FormLabel htmlFor="id">ID</FormLabel>
                <Input id="id" {...register("id")} readOnly />
              </FormControl>

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
                Save
              </Button>
            </VStack>
          </form>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
