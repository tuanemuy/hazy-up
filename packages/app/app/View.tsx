"use client";

import { Theme } from "@hazy-up/core/theme";

import { VStack, Link } from "@chakra-ui/react";

export function View() {
  return (
    <VStack spacing={`${Theme.sizes.grid}px`}>
      <Link href="/projects">Projects</Link>
      <Link href="/settings">Settings</Link>
    </VStack>
  );
}
