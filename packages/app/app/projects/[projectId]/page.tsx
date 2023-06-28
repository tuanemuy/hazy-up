import { api } from "@/lib/trpc/server";

import { Suspense } from "react";
import { RootLayout } from "@/components/layout";
import { View } from "./View";

type Props = {
  params: {
    projectId: string;
  };
};

export default async function Page({ params: { projectId } }: Props) {
  const project = await api.project.byId.query({ id: projectId });
  const pages = await api.page.list.query({ projectId });
  const colorPalette = await api.colorPalette.byProjectId.query({ projectId });
  const baseSize = await api.baseSize.byProjectId.query({projectId});

  return (
    <RootLayout project={project}>
      <Suspense>
        <View project={project} pages={pages} colorPalette={colorPalette} baseSize={baseSize} />
      </Suspense>
    </RootLayout>
  );
}
