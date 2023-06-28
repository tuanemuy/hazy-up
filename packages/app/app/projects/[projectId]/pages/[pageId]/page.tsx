import { api } from "@/lib/trpc/server";

import { Suspense } from "react";
import { RootLayout } from "@/components/layout";
import { View } from "./View";

type Props = {
  params: {
    projectId: string;
    pageId: string;
  };
};

export default async function Page({ params: { projectId, pageId } }: Props) {
  const project = await api.project.byId.query({ id: projectId });
  const page = await api.page.byId.query({ id: pageId });

  return (
    <RootLayout project={project} page={page}>
      <Suspense>
        <View page={page} />
      </Suspense>
    </RootLayout>
  );
}
