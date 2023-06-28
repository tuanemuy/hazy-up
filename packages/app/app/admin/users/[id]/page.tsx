import { api } from "@/lib/trpc/server";

import { Suspense } from "react";
import { View } from "./View";

type Props = {
  params: {
    id: string;
  };
};

export default async function AdminUserPage({ params: { id } }: Props) {
  const user = await api.user.byId.query({
    id,
  });

  return (
    <main>
      <Suspense>
        <View user={user} />
      </Suspense>
    </main>
  );
}
