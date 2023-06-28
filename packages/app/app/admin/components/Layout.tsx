"use client";

import { Theme } from "@hazy-up/core/theme";

import NextLink from "next/link";
import { Box, Flex, VStack, Link } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Flex position="relative" width="100vw" height="100vh" wrap="nowrap">
      <Box
        width={`${Theme.sizes.box * 4}px`}
        height="100%"
        padding={`${Theme.sizes.box}px 0`}
        flexShrink="0"
        boxShadow={`0 0 ${Theme.sizes.grid}px rgba(0, 0, 0, .1)`}
      >
        <VStack spacing="0">
          <Item href="#" name="Users" />
          <Item href="#" name="Settings" />
        </VStack>
      </Box>

      <Box width="100%" padding={`${Theme.sizes.box}px`}>
        {children}
      </Box>
    </Flex>
  );
}

type ItemProps = {
  href: string;
  name: string;
  isExternal?: boolean;
};

function Item({ href, name, isExternal }: ItemProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      isExternal={isExternal}
      display="block"
      width="100%"
      padding={`${Theme.sizes.grid * 1}px ${Theme.sizes.grid * 1}px`}
      fontSize=".9rem"
      _hover={{
        backgroundColor: "gray.100",
      }}
    >
      {name}
    </Link>
  );
}
