"use client";

import { Theme } from "@hazy-up/core/theme";
import { Project, Page } from "@hazy-up/db";

import NextLink from "next/link";
import { Flex, Box, Image } from "@chakra-ui/react";

type Props = {
  project?: Project;
  page?: Page;
  children: React.ReactNode;
};

export function RootLayout({ project, page, children }: Props) {
  return (
    <main>
      <Flex
        position="fixed"
        zIndex="2"
        top="0"
        left="0"
        alignItems="center"
        width="100vw"
        height={`${Theme.sizes.box}px`}
        padding={`${Theme.sizes.grid * 0}px ${Theme.sizes.grid * 2}px`}
        gap={`${Theme.sizes.grid}px`}
        boxShadow={`0px 0px ${Theme.sizes.grid * 0.5}px rgba(0, 0, 0, .05)`}
        backgroundColor={Theme.colorPalette.white}
      >
        <NextLink href="/">
          <Image
            src="/vercel.svg"
            height={`${Theme.sizes.box * 0.5}px`}
            width="auto"
          />
        </NextLink>

        {project && (
          <>
            <p>/</p>
            <NextLink href={`/projects/${project.id}`}>{project.name}</NextLink>

            {page && (
              <>
                <p>/</p>
                <NextLink href={`/projects/${project.id}/pages/${page.id}`}>
                  {page.name}
                </NextLink>
              </>
            )}
          </>
        )}
      </Flex>

      <Flex
        position="relative"
        justifyContent="center"
        alignItems="flex-start"
        height="100vh"
        width="100vw"
        paddingTop={`${Theme.sizes.box}px`}
        backgroundColor={Theme.colorPalette.white}
        overflowY="scroll"
      >
        <Box
          width="100%"
          maxWidth={`${Theme.sizes.box * 15}px`}
          margin={`${Theme.sizes.box}px ${Theme.sizes.grid * 2}px`}
        >
          {children}
        </Box>
      </Flex>
    </main>
  );
}
