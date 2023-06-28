"use client";

import { signIn } from "next-auth/react";

import { Flex, Button } from "@chakra-ui/react";

export default function AdminSignUp() {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        onClick={() => signIn(undefined, { callbackUrl: "/" })}
        colorScheme="teal"
      >
        SignUp
      </Button>
    </Flex>
  );
}
