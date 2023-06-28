"use client";

import { useSession } from "next-auth/react";

import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function AuthRequired({ children }: Props) {
  const { data: session } = useSession();

  if (session?.user?.role === "user") {
    return <Box>{children}</Box>;
  }
}
