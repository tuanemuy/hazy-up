"use client";

import { useSession, signIn } from "next-auth/react";

import { Flex, Button, Spinner } from "@chakra-ui/react";
import { Theme } from "@hazy-up/core/theme";

type Props = {
  children: React.ReactNode;
};

export function AdminRequired({ children }: Props) {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" && (
        <Flex
          position="fixed"
          zIndex="2"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(255, 255, 255, .75)"
        >
          <Spinner color={Theme.colorPalette.theme} />
        </Flex>
      )}

      {status !== "loading" && session?.user?.role !== "ADMIN" && (
        <Flex
          position="fixed"
          zIndex="2"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(255, 255, 255, .75)"
        >
          <Button
            onClick={() => signIn()}
            colorScheme="teal"
            marginTop={`${Theme.sizes.grid * 2}px`}
          >
            Sign in
          </Button>
        </Flex>
      )}

      {children}
    </>
  );
}
