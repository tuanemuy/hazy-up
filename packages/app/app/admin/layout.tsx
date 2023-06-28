import { AdminRequired } from "@/components/auth/AdminRequired";
import { Layout } from "./components";

export const metadata = {
  title: "HazyUpAdmin",
  description: "A simple Website builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminRequired>
      <Layout>{children}</Layout>
    </AdminRequired>
  );
}
