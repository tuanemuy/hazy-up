import { RouterOutputs } from "@/lib/trpc/shared";

type Props = {
  user: RouterOutputs["user"]["byId"];
};

export function View({ user }: Props) {
  return <p>{user.id}</p>;
}
