import { ReactNode } from "react";
import { Section } from "@/document";
import { useThemeContext, useScreenStateContext } from "@/document/contexts";

import { Box, Image } from "@chakra-ui/react";

type Props = {
  section: Section;
  children: ReactNode;
};

export function SectionViewer({ section, children }: Props) {
  const { sizes, wraps } = useThemeContext();
  const { screen } = useScreenStateContext();
  const { padding, isWrapped, background, backgroundImage, isSemantic } =
    section.attributes;

  return (
    <Box
      as={isSemantic ? "section" : "div"}
      position="relative"
      padding={`${padding.getValueOfScreen(screen)[0] * sizes.box}px  0 ${
        padding.getValueOfScreen(screen)[1] * sizes.box
      }px 0`}
    >
      <Box
        position="relative"
        zIndex="4"
        width={isWrapped ? wraps[screen.kind] : "100%"}
        margin="0 auto"
      >
        {children}
      </Box>

      {background && (
        <Box
          position="absolute"
          top="0"
          left="0"
          zIndex="2"
          width="100%"
          height="100%"
          background={background}
        />
      )}

      {backgroundImage && (
        <Box
          position="absolute"
          zIndex="1"
          top="0"
          left="0"
          width="100%"
          height="100%"
        >
          <Image
            src={backgroundImage.src}
            srcSet={backgroundImage.getSrcset()}
            alt="背景"
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </Box>
      )}
    </Box>
  );
}
