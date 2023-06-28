import { RouterOutputs } from "@/lib/trpc/shared";

type Props = {
  page: RouterOutputs["page"]["byId"];
};

export function View({ page }: Props) {
  return (
    <>
      <p>{page.name}</p>
      <p>{page.path}</p>
    </>
  );
}
