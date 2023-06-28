import { api } from "@/lib/trpc/server";

import { Suspense } from "react";
import { RootLayout } from "@/components/layout";
import { View } from "./View";

export default async function Page() {
  const projects = await api.project.list.query({});

  return (
    <RootLayout>
      <Suspense>
        <View projects={projects} />
      </Suspense>
    </RootLayout>
  );
}
