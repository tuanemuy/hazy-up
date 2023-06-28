import { AuthProvider } from "@/components/auth";
import { StyleFrameworkProvider } from "@/components/style";
import "ress";

export const metadata = {
  title: "HazyUp",
  description: "A simple Website builder.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <StyleFrameworkProvider>
          <AuthProvider>{children}</AuthProvider>
        </StyleFrameworkProvider>
      </body>
    </html>
  );
}
