import { useEffect, useState } from "react";
import {
  Component,
  GenerateTemplateModuleArgs,
  TemplateModule,
} from "@/document";
import { Theme } from "@/theme";
import { useScreenStateContext } from "@/document/contexts";

import { Box, Flex, Spinner } from "@chakra-ui/react";

type ComponentViewProps = {
  component: Component;
};

export function ComponentViewer({ component }: ComponentViewProps) {
  const { screen } = useScreenStateContext();
  const { template, props } = component.attributes;

  const [tm, setTm] = useState<TemplateModule | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const args: GenerateTemplateModuleArgs = await import(template.url);
        setTm(TemplateModule.generate(args));
      } catch (e) {
        console.log(e);
        setTm(null);
      }
    })();
  }, [template]);

  return (
    <Box position="relative" width="100%" height="100%">
      {tm instanceof TemplateModule && (
        <tm.Template {...props} className={tm.getStyle(screen)} />
      )}

      {tm === null && (
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          padding={`${Theme.sizes.grid * 3}px`}
          border={`3px dashed ${Theme.colorPalette.theme}`}
        >
          <Spinner />
        </Flex>
      )}
    </Box>
  );
}
