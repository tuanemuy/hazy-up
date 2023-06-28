"use client";

import { useSession, signIn } from "next-auth/react";

import { Flex, Button } from "@chakra-ui/react";
import { Theme } from "@hazy-up/core/theme";

export default function AdminSignUp() {
  const { data: session } = useSession();

  return (
    <main>
      <Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
        <Button
          onClick={() => signIn()}
          colorScheme="teal"
          marginTop={`${Theme.sizes.grid * 2}px`}
        >
          Create a test Admin User
        </Button>
      </Flex>
    </main>
  );
}
