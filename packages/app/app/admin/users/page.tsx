import { Suspense } from "react";
import { api } from "@/lib/trpc/server";

import { View } from "./View";

export default async function AdminUsersPage() {
  const users = await api.user.list.query({
    page: 0,
  });

  return (
    <main>
      <Suspense>
        <View users={users} />
      </Suspense>
    </main>
  );
}
